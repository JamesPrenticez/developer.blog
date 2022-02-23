import React from 'react';
import Link from "next/link"

function Posts({posts}) {
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-5 pt-10'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 p-2 md:pd-6'>
      {posts.map((post, index) => (
        //Post Display Card
        <Link key={index} href={`/post/${post.slug}`} passHref>
          <div className="overflow-hidden rounded-lg">
            <div 
              className="group overflow-hidden border-b-2"
              style={{borderColor: 'transparent'}}
            >
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src={post.image || "/default-image.jpg"}
                alt=''
              />
            </div>

            <div className='flex justify-between p-5 bg-white'>
              <div>
                <p className='text-lg font-bold'>{post.title}</p>
                <p className='text-xs'>By {post.author.name}</p>
              </div>
                <img 
                  className='h-12 w-12 rounded-full'
                  src={post.author.image}
                  alt=''
                />
            </div>
          </div>
          </Link>
      ))}
    </div>
  </main>
  )
}

export default Posts;