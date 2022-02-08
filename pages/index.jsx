import prisma from '../lib/prisma';
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Posts from '../components/Posts'
import Footer from '../components/Footer'

function Home({posts}) {
  return (
    <>
      <Head>
        <title>James Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-7xl mx-auto'>
        <Header/>      
        <Banner/>
        <Posts posts={posts} />
        <Footer/>
      </div>

    </>
  )
}

export default Home

export const getServerSideProps = async ctx  => {
  const posts = await prisma.post.findMany()
  return {props: {posts}}
}