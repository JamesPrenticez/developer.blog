import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { signIn } from 'next-auth/react';

function NotSession() {
  return (
  <>
    <Header/>
      <main className='min-h-screen max-w-7xl mx-auto px-5 pt-10'>
        <div className='flex flex-wrap justify-center items-center space-y-4 pt-20'>
          <h1 className='w-full text-center'>Access Denied!</h1>
          <div className='w-full text-center'>You need to be authenticated to view this page.</div>
          <button
            className='text-xl h-16 w-64 rounded-full border border-green-600 p-2 cursor-pointer text-black bg-white hover:text-white hover:bg-green-600'
            onClick={() => signIn}
          >
            Sign In
          </button>
        </div>
      </main>
    <Footer/>
  </>
  )
}

export default NotSession