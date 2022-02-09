import prisma from '../../lib/prisma';
import Header from '../../components/Header'

function Post({post}) {
  return (
      <main>
        <Header />
        
        {/* Main Image */}
        <img 
          className="w-full h-40 object-cover"
          src={`../.${post.img}`}
          // src='../../posts/linear.png'
          />

        {/* Main Image */}
        <article className='max-w-3xl mx-auto p-5'>
          <h1 className='text-3xl mt-10 mb-3'>{post.title}</h1>
          <h2 className='text-xl font-light text-gray-500 mb-2'>{post.description}</h2>
        </article>

      </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = await prisma.post.findMany({
    select:{
      slug: true
    }
  })
  //console.log(query)
  
  const paths = query.map(post => ({
    params: {
      slug: post.slug
    }
  }))
  //console.log(paths)

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params}) => {
    const post = await prisma.post.findUnique({
    where: {
      slug: params?.slug
    },
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

  if(!post){
    return { notFound: true }
  }

  return {
    props: { post },
    revalidate: 60, // after 60 seconds it will update the old cache
  }
}