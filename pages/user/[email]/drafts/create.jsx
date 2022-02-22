import React, { useState } from 'react';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import DraftEditor from '../../../../components/DraftEditor';

import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //toolbar
import { convertToRaw } from "draft-js";

function CreateDraft() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImageURL] = useState('');
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

  return (
    <>
      <Header />
        <main className='min-h-screen max-w-7xl mx-auto px-5 pt-10'>
          <div className='flex justify-center items-center'>
          <DraftEditor 
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            image={image}
            setImageURL={setImageURL}
            slug={slug}
            setSlug={setSlug}
            content={content}
            generateSlug={generateSlug}
            editorState={editorState}
            setEditorState={setEditorState}
            onEditorStateChange={onEditorStateChange}
          />
          </div>
        </main>
      <Footer/>
    </>
  )
}

export default CreateDraft