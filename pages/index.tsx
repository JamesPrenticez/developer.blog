import prisma from '../lib/prisma';
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import { Post } from '../typings';

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

      <div className='max-w-7xl mx-auto'>
        <Header/>      
        <Banner/>
        <Posts posts={props.posts} />
        <Footer/>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    select: {
      title: true,
      content: true,
      img: true,
      author: {
        select: {
            name: true,
            img: true,
          },
      }
    },
  })
  return {props: {posts}}
}