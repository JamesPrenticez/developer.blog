import React from 'react'
import { useSession, getSession } from 'next-auth/react';
import Header from '../../../../components/Header'
import NotSession from '../../../../components/NotSession';

export default function Settings({user, posts}) {
  const { data: session } = useSession()

  if (!session) {
    return (
      <NotSession />
    )
  }

  return (
    <>
      <Header />
      <main className='min-h-screen max-w-7xl mx-auto px-5 pt-10'>
      <div className='flex justify-center items-center'>
          <div className='w-4/6'>
            <h1 className='text-xl font-bold p-2'>Account Settings</h1>
            <hr className='py-6'/>
            <div className='grid grid-cols-1 sm:grid-cols-2'>

            {/* Left */}
            <div className=''>
              <img 
              className='w-64 h-64 rounded-full'
              src= {user.image}
              alt=''
              />
            </div>

            {/* Right */}
            <div className='border rounded-lg p-5'>
                <h2 className='w-full'>{user.name}</h2>
                <h3 className='w-full'>
                  <span className='font-bold'>Email: </span>
                  {user.email}
                </h3>
                <h3 className='w-full'>
                  <span className='font-bold'>Blog Posts: </span>
                  {posts.length}
                </h3>
            </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async ({req ,res}) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { user: null } };
  }

  const user = await prisma.user.findUnique({
    where:{
      email: session.user.email
    }
  })
  const posts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: true,
    },
  })
  return {
    props: {user, posts}
  }
}