import React from 'react';
import Link from "next/Link"

function Posts({posts}) {
  return (
    <>
    {posts.map((post, index) => (
      //Post Display Card
      <Link
        className="hover:cursor-pointer hover:bg-white"
        key={post.id}
        href={`/post/${post.slug}`}
      >
      <div>
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
      </Link>
 
    ))}
    </>
  )
}

export default Posts;