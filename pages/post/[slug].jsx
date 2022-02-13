import prisma from '../../lib/prisma';
import Header from '../../components/Header'
import { convertFromRaw } from "draft-js";
import { stateToHTML } from 'draft-js-export-html';
import Footer from '../../components/Footer';
//https://www.npmjs.com/package/draft-js-export-html

// let options = {
//   inlineStyleFn: (styles) => {
//     let key = 'color-';
//     let color = styles.filter((value) => value.startsWith(key)).first();
 
//     if (color) {
//       return {
//         element: 'span',
//         style: {
//           color: color.replace(key, ''),
//         },
//       };
//     }
//   },
// }

let options = {
  inlineStyles: {
    BOLD: {className: 'font-bold'},
    ITALIC: {className: 'italic'},
    ITALIC: {className: 'italic'},
  },
};

function Post({post}) {
  return (
    <>
      <Header />
      <main className='max-w-7xl min-h-screen mx-auto'>
        
        {/* Main Image */}
        <img 
          className="w-full h-40 object-cover"
          src={post.image}
        />

        {/* Main Image */}
        <article className='max-w-3xl mx-auto p-5'>
          <h1 className='text-3xl mt-10 mb-3'>{post.title}</h1>
          <h2 className='text-xl font-light text-gray-500 mb-2'>{post.description}</h2>
          <div className='flex items-center space-x-2'>
            <img
              className='h-10 w-10 rounded-full' 
              src={post.author.image}
              alt=""
            />
            <p className='font-extralight text-sm'>
              Blog post by <span className='text-green-600'>{post.author.name}</span> - 
              Published at: {post.createdAt.toLocaleString()}</p>
          </div>

          <div>

        {/* Blog Post */}
          <section
                className="my-6"
                dangerouslySetInnerHTML={{ __html: stateToHTML(convertFromRaw(JSON.parse(post.content)), options) }}
                />
          </div>
        </article>

        {/* Comments Section */}
        <div className='max-w-2xl mx-auto my-5 h-[3px] bg-gradient-to-r from-white via-yellow-500 to-white'></div>
     
        <form className='flex flex-col p-5 max-w-2xl mx-auto mb-10'>
          <h3 className='text-sm text-yellow-500'>Enjoyed this article?</h3>
          <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
          <hr className='py-3 mt-2'/>
          <label className='block mb-5'>
            <span className='text-gray-700'>Name</span>
            <input className='shadow rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-2' placeholder="John Appleseed" type="text" />
          </label>
          <label className='block mb-5'>
            <span className='text-gray-700'>Email</span>
            <input className='shadow rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-2' placeholder="JohnAppleseed@xtra.co.nz" type="text" />
          </label>
          <label className='block mb-5'>
            <span className='text-gray-700'> Comment</span>
            <textarea 
              className='shadow border rounded py-2 px-3 form-text-area mt-1 block w-full ring-yellow-500 outline-none focus:ring-2'
              placeholder="John Appleseed"
              rows={8}
            />
          </label>
        </form>

      </main>
      <Footer />
    </>
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
      description: true,
      content: true,
      image: true,
      createdAt: true,
      author: {
        select: {
            name: true,
            image: true,
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