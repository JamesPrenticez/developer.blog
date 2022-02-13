import prisma from '../lib/prisma';
import Head from 'next/head'
import Header from '../components/Header'
// import Banner from '../components/Banner'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import { Post } from '../typings';

// import TextEditor from '../components/TextEditor'

interface Props {
  posts: Post;
}

function Home(props: Props) {
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