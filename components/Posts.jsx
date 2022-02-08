import React from 'react';

function Posts({posts}) {
  return (
    <>
    {posts.map((post, index) => (
      //Post Display Card
      <div
        className=""
        key={index}
        onClick={() => router.push(`/project/${post.id}`)} 
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