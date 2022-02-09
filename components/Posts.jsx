import React from 'react';
import Link from "next/Link"

function Posts({posts}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:pd-6'>
      {posts.map((post, index) => (
        //Post Display Card
        <Link key={index} href={`/post/${post.slug}`}>
          <div className='group cursor-pointer rounded-lg border overflow-hidden'>
            <img 
              className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
              src={post.img}
            />
            <div className='flex justify-between p-5 bg-white'>
              <div>
                <p className='text-lg font-bold'>{post.title}</p>
                <p className='text-xs'>By: {post.author.name}</p>
              </div>
                <img 
                  className='h-12 w-12 rounded-full'
                  src={post.author.img}
                />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Posts;