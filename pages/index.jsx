import prisma from '../lib/prisma';
import Head from 'next/head'
import Header from '../components/Header'
// import Banner from '../components/Banner'
import Posts from '../components/Posts'
import Footer from '../components/Footer'

function Home(props) {
  return (
    <>
      <Head>
        <title>James Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>      
      <main className='max-w-7xl mx-auto'>
        {/* <Banner/> */}
        <Posts posts={props.posts} />
        {/* <TextEditor /> */}
      </main>
      <Footer/>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
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
  })
  return {props: {posts}}
}