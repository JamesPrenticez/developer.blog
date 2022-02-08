import prisma from '../../lib/prisma';
import { useRouter } from 'next/router'

function Post({post}) {
  const router = useRouter()

  return (
    <div className="max-w-7xl mx-auto">
      {/* Sudo Nav*/}
      <div className="flex justify-between p-5 mx-auto bg-white h-20">
        <div className="flex items-center space-x-5">
          <button
            onClick={() => router.push("/")}
            className="text-white bg-green-600 px-4 py-1 rounded-full hover:cursor-pointer hover:bg-green-700"
          >
            BACK
          </button>
        </div>
      </div>

      <div className="bg-white mt-5">
        <p className="">{post.id}</p>
          <p className="">{post.title}</p>
          <p className="">{post.content}</p>
          <p className="">{post.author}</p>
          <div className="">
            <img 
              className="h-12 w-12"
              src={post.image} 
            />
          </div>
      </div>

     </div>
  );
}

export default Post

export async function getServerSideProps({params}){
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  })

  return {
    props: {post}
  }
}