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

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content, description, image, slug };
      await fetch('/api/post/createDraft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/post/drafts');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header />
      <main className='min-h-screen max-w-7xl mx-auto px-5'>
        <div className='flex justify-center items-center'>
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
              className='w-full p-2 border rounded-sm'
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              type="text"
              value={description}
              required
            />
            <input
              className='w-full p-2 border rounded-sm'
              onChange={(e) => setImageURL(e.target.value)}
              placeholder="Image URL"
              type="text"
              value={image}
              required
            />
            <div className='group cursor-pointer rounded-sm border overflow-hidden'>
              <img 
                className={`h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out  bg-white ${image.length > 0 ? '' : 'opacity-50'} `}
                src={image.length > 0 ? image : '../default-image.jpg'} 
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
            {/* https://www.veryicon.com/icons/miscellaneous/rich-text-editor/ */}
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange} 
                toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-2 mb-6 bg-white shadow-lg w-full !overflow-hidden mx-auto p-6 border"
                placeholder="Start writing your blog post..."
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'image', 'history'],
                    inline: {
                      inDropdown: false,
                      className: '',
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['bold', 'italic', 'underline', 'strikethrough'],
                      bold: { icon: "../text-editor-toolbar/bold.svg", className: '' },
                      italic: { icon: '../text-editor-toolbar/italic.svg', className: undefined },
                      underline: { icon: '../text-editor-toolbar/underline.svg', className: undefined },
                      strikethrough: { icon: '../text-editor-toolbar/strikethrough.svg', className: undefined },
                    },
                    blockType: {
                      inDropdown: true,
                      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    fontSize: {
                      icon: 'fontSize',
                      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    fontFamily: {
                      options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    list: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['unordered', 'ordered'],
                      unordered: { icon: '../text-editor-toolbar/unordered.svg', className: undefined },
                      ordered: { icon: '../text-editor-toolbar/ordered.svg', className: undefined },
                    },
                    textAlign: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['left', 'center', 'right', 'justify'],
                      left: { icon: '../text-editor-toolbar/left.svg', className: undefined },
                      center: { icon: '../text-editor-toolbar/center.svg', className: undefined },
                      right: { icon: '../text-editor-toolbar/right.svg', className: undefined },
                      justify: { icon: '../text-editor-toolbar/justify.svg', className: undefined },
                    },
                    colorPicker: {
                      icon: '../text-editor-toolbar/text-color.svg',
                      className: undefined,
                      component: undefined,
                      popupClassName: undefined,
                      colors: ['rgb(0,0,0)', 'rgb(256,256,256)', 'rgb(255,223,101)', 'rgb(256,0,0)', 'rgb(0,256,0)',
                        'rgb(0,0,256)'],
                    },
                    link: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      popupClassName: undefined,
                      dropdownClassName: undefined,
                      showOpenOptionOnHover: true,
                      defaultTargetOption: '_self',
                      options: ['link', 'unlink'],
                      link: { icon: '../text-editor-toolbar/link.svg', className: undefined },
                      unlink: { icon: '../text-editor-toolbar/unlink.svg', className: undefined },
                      linkCallback: undefined
                    },
                    emoji: {
                      icon: '../text-editor-toolbar/emoji.svg',
                      className: 'w-12',
                      component: undefined,
                      popupClassName: undefined,
                      emojis: [
                        '😃', '🤣', '😉', '😍', '🤑', '🤩', 
                        '😭', '😎', '😜', '🤮', '😇', '🤬',
                        '🖐', '👌', '👍', '👎',  '🙏','👏', 
                        '🔥', '💯', '🎉', '🔔', '💰', '🚀',
                        '🌈', '⚡', '💩',  '🌊', '🏆', '🦄',
                        '😺', '🐵', '🦆', '🛑' ,'🌟', '🌞', 
                        '🌛', '❤️', '🕑', '🔔', '📢', '🔑'
                      ],
                    },
                    image: {
                      icon: '../text-editor-toolbar/image.svg',
                      className: undefined,
                      component: undefined,
                      popupClassName: undefined,
                      urlEnabled: true,
                      uploadEnabled: true,
                      alignmentEnabled: true,
                      uploadCallback: undefined,
                      previewImage: false,
                      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                      alt: { present: false, mandatory: false },
                      defaultSize: {
                        height: 'auto',
                        width: 'auto',
                      },
                    },
                    history: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['undo', 'redo'],
                      undo: { icon: '../text-editor-toolbar/undo.svg', className: undefined },
                      redo: { icon: '../text-editor-toolbar/redo.svg', className: undefined },
                    }
                }}
                required
              />
            </div>

            <div className='w-full flex space-x-2'>
              <button 
                className="bg-red-600 p-2 text-white rounded-md hover:cursor-pointer hover:bg-red-500 ml-auto"
                type="button"
                value="Discard"
                onClick={() => setEditorState(EditorState.createEmpty())}
              >
                Discard
              </button>
              <button 
                // disabled={!content || !slug || !img || !description || !title}
                className="bg-green-600 p-2 text-white rounded-md hover:cursor-pointer hover:bg-green-500 disabled:cursor-not-allowed"
                type="submit"
                value="Create"
              >
                Save Draft
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default CreateDraft