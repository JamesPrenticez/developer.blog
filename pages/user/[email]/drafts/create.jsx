import React, { useState } from 'react';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import DraftEditor from '../../../../components/DraftEditor';

import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //toolbar
import { convertToRaw } from "draft-js";

import Router from 'next/router';
import { useSession } from 'next-auth/react';

function CreateDraft() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImageURL] = useState('');
  const [slug, setSlug] = useState('');
  
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [content, setContent] = useState('');

  const { data: session } = useSession();  

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
      const body = { title, content, description, image, slug };
      await fetch('/api/post/createDraft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push(`/user/${session?.user.email}/drafts/view-all`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header />
        <main className='min-h-screen max-w-7xl mx-auto px-5 pt-10'>
          <div className='flex justify-center items-center'>
          <form onSubmit={submitData} className="w-4/6 space-y-1">
            <DraftEditor 
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              image={image}
              setImageURL={setImageURL}
              slug={slug}
              setSlug={setSlug}
              generateSlug={generateSlug}
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            />
            <div className="flex w-full space-x-2 pb-20">
              <button
                className="ml-auto rounded-md bg-red-600 p-2 text-white hover:cursor-pointer hover:bg-red-500"
                type="button"
                value="Discard"
                onClick={() => setEditorState(editorState.createEmpty())}
              >
                Discard
              </button>
              <button
                // disabled={!content || !slug || !img || !description || !title}
                className="rounded-md bg-green-600 p-2 text-white hover:cursor-pointer hover:bg-green-500 disabled:cursor-not-allowed"
                type="submit"
                value="Create"
              >
                Save Draft
              </button>
            </div>
          </form>
          </div>
        </main>
      <Footer/>
    </>
  )
}

export default CreateDraft