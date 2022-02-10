import React, { useState } from 'react';
import Router from 'next/router';
import Header from '../../components/Header'

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className='max-w-7xl mx-auto'>
      <Header />
      <div className='bg-green-50 flex justify-center items-center p-3 '>
        <form 
          onSubmit={submitData}
          className="w-4/6"
        >
          <h1 className='text-xl font-bold p-2'>Create New Draft</h1>
          <input
            autoFocus
            className='w-full p-2 border rounded-sm'
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            className='w-full p-2 border rounded-sm'
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <div className='w-full flex space-x-2'>
            <button 
              disabled={!content || !title}
              className="bg-red-600 p-2 text-white rounded-md hover:cursor-pointer hover:bg-red-700 ml-auto"
              type="button"
              value="Discard"
            >
              Discard
            </button>
             <button 
              disabled={!content || !title}
              className="bg-green-600 p-2 text-white rounded-md hover:cursor-pointer hover:bg-green-700"
              type="submit"
              value="Create"
            >
              Save Draft
            </button>
          </div>
        </form>
      </div>


    </main>
  )
}

export default Create