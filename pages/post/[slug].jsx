import prisma from '../../lib/prisma';
import Header from '../../components/Header'
import { convertFromRaw } from "draft-js";
import { stateToHTML } from 'draft-js-export-html';
import Footer from '../../components/Footer';
import { useForm, SubmitHandler } from "react-hook-form"

//https://www.npmjs.com/package/draft-js-export-html
//Methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_methods

let options = {
  inlineStyles: {
    BOLD: {className: 'font-bold'},
    ITALIC: {className: 'italic'},
    UNDERLINE: {className: 'underline'},
    STRIKETHROUGH: {className: 'line-through'}
  },
  inlineStyleFn: (styles) => {
    let obj = {}
    let color = styles.filter((value) => value.startsWith('color-')).first();
    let highlight = styles.filter((value) => value.startsWith('bgcolor-')).first();
    let fontFamily = styles.filter((value) => value.startsWith('fontfamily-')).first();
    let fontSize = styles.filter((value) => value.startsWith('fontsize-')).first();
 
    if (color) obj = {style: {color: color.replace('color-', '')}} 
    if (highlight) obj = {style: {backgroundColor: highlight.replace('bgcolor-', '')}}
    if (fontFamily) obj = {style: {fontFamily: fontFamily.replace('fontfamily-', '')}}
    if (fontSize) obj = {style: {fontSize: fontSize.replace('fontsize-', '')}}

    return obj
  }
}

function Post({post}) {
  const { 
    register,
    handleSubmit,
    formState:  {errors},
  } = useForm()

  const onSubmit = async(data) => {
    fetch('/api/post/createComment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Header />
      {/* Main Image */}
      <img 
        className="w-full h-40 object-cover"
        src={post.image}
        alt=''
      />
      <main className='max-w-7xl min-h-screen mx-auto'>
        {/* Blog Post Details */}
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

        {/* Blog Post Content */}
          <section
                className="my-6"
                dangerouslySetInnerHTML={{ __html: stateToHTML(convertFromRaw(JSON.parse(post.content)), options) }}
                />
          </div>
        </article>

        {/* Comments Section */}
        <div className='max-w-2xl mx-auto my-5 h-[3px] bg-gradient-to-r from-white via-yellow-500 to-white'></div>
     
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col p-5 max-w-2xl mx-auto mb-10'
        >
          <h3 className='text-sm text-yellow-500'>Enjoyed this article?</h3>
          <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
          <hr className='py-3 mt-2'/>

          <input 
            {...register("postId")}
            type="hidden"
            name="postId"
            value={post.id}
          />

          <label className='block mb-5'>
            <span className='text-gray-700'>Name</span>
            {errors.name && (
              <span className='text-red-500 italic text-sm'>{" "}
              - required
            </span>
            )}
            <input
              {...register("name", { required: true })}
              className='shadow rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-2'
              placeholder="John Appleseed"
              type="text"
            />
          </label>
          <label className='block mb-5'>
            <span className='text-gray-700'>Email</span>{" "}
            {errors.email && (
              <span className='text-red-500 italic text-sm'>
                - required
              </span>
            )}
            <input
              {...register("email", { required: true })} 
              className='shadow rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-2'
              placeholder="JohnAppleseed@xtra.co.nz"
              type="email"
            />
          </label>
          <label className='block mb-5'>
            <span className='text-gray-700'> Comment</span>{" "}
            {errors.comment && (
              <span className='text-red-500 italic text-sm'>
                - required
              </span>
            )}
            <textarea 
              {...register("comment", { required: true })}
              className='shadow border rounded py-2 px-3 form-text-area mt-1 block w-full ring-yellow-500 outline-none focus:ring-2'
              placeholder="John Appleseed"
              rows={8}
            />
          </label>

          <input type="submit" className='shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white px-4 py-2 rounded cursor-pointer' />

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
      id: true,
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