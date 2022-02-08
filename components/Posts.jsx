import React from 'react';
import {useRouter} from "next/router"

function Posts({posts}) {
  const router = useRouter()
  return (
    <>
    {posts.map((post, index) => (
      //Post Display Card
      <div
        className="hover:cursor-pointer hover:bg-white"
        key={index}
        onClick={() => router.push(`/post/${post.id}`)} 
      >
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
    ))}
    </>
  )
}

export default Posts;