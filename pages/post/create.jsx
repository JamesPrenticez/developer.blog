import React, { useState } from 'react';
import Router from 'next/router';
import Header from '../../components/Header'

import dynamic from "next/dynamic"
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //toolbar
import { convertToRaw } from "draft-js";

  const Editor = dynamic(() => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
)

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImageURL] = useState('');
  const [slug, setSlug] = useState('');
  
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [content, setContent] = useState('');

  const generateSlug = (Text) => {
    let slug = Text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
    setSlug(slug)
  }

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
    setContent(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
  }

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content, description, img, slug };
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

  console.log(typeof(content))

  return (
    <main className='max-w-7xl mx-auto'>
      <Header />
      <div className='flex justify-center items-center p-3 '>
        <form 
          onSubmit={submitData}
          className="w-4/6 space-y-1"
        >
          <h1 className='text-xl font-bold p-2'>Create New Draft</h1>
          <input
            autoFocus
            className='w-full p-2 border rounded-sm'
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
            required
          />
          <div className='flex w-full'>
            <input
              autoFocus
              className='p-2 border rounded-sm inline flex-grow'
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Slug"
              type="text"
              value={slug}
              required
            />
            <input 
              type='button'
              onClick={() => generateSlug(title)}
              className='inline flex-grow-0 px-4 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer'
              value="Generate Slug"
            />
          </div>
          <input
            autoFocus
            className='w-full p-2 border rounded-sm'
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            type="text"
            value={description}
            required
          />
          <input
            autoFocus
            className='w-full p-2 border rounded-sm'
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Image URL"
            type="text"
            value={img}
            required
          />
          <div className='group cursor-pointer rounded-sm border overflow-hidden'>
            <img 
              className={`h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out  bg-white ${img.length > 0 ? '' : 'opacity-50'} `}
              src={img.length > 0 ? img : '../default-image.jpg'} 
              alt="" 
            />
          </div>
          {/* <textarea
            cols={50}
            className='w-full p-2 border rounded-sm'
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          /> */}

          <div className="bg-[#F8F9FA]">
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange} 
              toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
              editorClassName="mt-2 mb-6 bg-white shadow-lg w-full !overflow-hidden mx-auto p-6 border"
              placeholder="Start writing your blog post..."
              required
            />
          </div>

          <div className='w-full flex space-x-2'>
            <button 
              className="bg-red-600 p-2 text-white rounded-md hover:cursor-pointer hover:bg-red-700 ml-auto"
              type="button"
              value="Discard"
            >
              Discard
            </button>
             <button 
              // disabled={!content || !slug || !img || !description || !title}
              className="bg-green-600 p-2 text-white rounded-md hover:cursor-pointer hover:bg-green-700 disabled:cursor-not-allowed"
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