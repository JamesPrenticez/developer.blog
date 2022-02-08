import React from 'react';
import Link from "next/Link"

function Posts({posts}) {
  console.log(posts)
  return (
    <>
      {posts.map((post, index) => (
        //Post Display Card
        <Link key={index} href={`/post/${post.slug}`}>
          <div>
            <img src={post.image}/>
            <div>
              <div>
                <p>{post.title}</p>
                <p>By: {post.author.name}</p>
                <p>{post.content}</p>
                <p></p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Posts;