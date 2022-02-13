import React from 'react';
import { useSession, getSession } from 'next-auth/react';
import Link from "next/Link"
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Drafts({drafts}) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Header/>
        <main className='max-w-7xl mx-auto'>
          <h1>Drafts</h1>
          <div>You need to be authenticated to view this page.</div>
        </main>
        <Footer/>
      </>
    );
  }

  return (
    <>
      <Header/>
        <main className='min-h-screen max-w-7xl mx-auto px-5'>
          <h1>My Drafts</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:pd-6'>
            {drafts.map((draft, index) => (
              //Drafts Display Card
              <Link key={index} href={`/post/${draft.slug}`}>
                <div className='group cursor-pointer rounded-lg border overflow-hidden'>
                  <img 
                    className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
                    src={draft.image}
                  />
                  <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <p className='text-lg font-bold'>{draft.title}</p>
                      <p className='text-xs'>By {draft.author.name}</p>
                    </div>
                      <img 
                        className='h-12 w-12 rounded-full'
                        src={draft.author.image}
                      />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      <Footer/>
    </>
  )
}

export default Drafts;

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    select: {
      slug: true,
      title: true,
      content: true,
      image: true,
      author: {
        select: {
            name: true,
            image: true,
          },
      }
    },
  });
  return {
    props: { drafts },
  };
};