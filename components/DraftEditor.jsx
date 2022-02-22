import React from 'react'
import Router from 'next/router';
import { useSession } from 'next-auth/react';

import dynamic from "next/dynamic"
const Editor = dynamic(() => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
)

export default function DraftEditor({
  title,
  setTitle,
  description,
  setDescription,
  image,
  setImageURL,
  slug,
  setSlug,
  content,
  generateSlug,
  editorState,
  setEditorState,
  onEditorStateChange,
}) {

  const { data: session } = useSession();  

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content, description, image, slug };
      await fetch('/api/post/createDraft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push(`/user/${session?.user.email}/drafts`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={submitData} className="w-4/6 space-y-1">
      <h1 className="p-2 text-xl font-bold">Create New Draft</h1>
      <input
        autoFocus
        className="w-full rounded-sm border p-2"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        value={title}
        required
      />
      <div className="flex w-full">
        <input
          className="inline flex-grow rounded-sm border p-2"
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Slug"
          type="text"
          value={slug}
          required
        />
        <input
          type="button"
          onClick={() => generateSlug(title)}
          className="inline flex-grow-0 bg-gray-300 px-4 hover:cursor-pointer hover:bg-gray-400"
          value="Generate Slug"
        />
      </div>
      <input
        className="w-full rounded-sm border p-2"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        type="text"
        value={description}
        required
      />
      <input
        className="w-full rounded-sm border p-2"
        onChange={(e) => setImageURL(e.target.value)}
        placeholder="Image URL"
        type="text"
        value={image}
        required
      />
      <div className="overflow-hidden rounded-sm border">
        <img
          className={`h-60 w-full bg-white object-cover ${
            image.length > 0 ? '' : 'opacity-50'
          } `}
          src={image.length > 0 ? image : '/default-image.jpg'}
          alt=""
        />
      </div>
      <div className="bg-[#F8F9FA]">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
          editorClassName="mb-6 bg-white shadow-lg w-full !overflow-hidden mx-auto p-6 border !h-[600px]"
          placeholder="Start writing your blog post..."
          toolbar={{
            options: [
              'inline',
              'blockType',
              'fontSize',
              'fontFamily',
              'list',
              'textAlign',
              'colorPicker',
              'link',
              'emoji',
              'image',
              'history',
            ],
            inline: {
              inDropdown: false,
              className: '',
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold', 'italic', 'underline', 'strikethrough'],
              bold: { icon: '/text-editor-toolbar/bold.svg', className: '' },
              italic: {
                icon: '/text-editor-toolbar/italic.svg',
                className: undefined,
              },
              underline: {
                icon: '/text-editor-toolbar/underline.svg',
                className: undefined,
              },
              strikethrough: {
                icon: '/text-editor-toolbar/strikethrough.svg',
                className: undefined,
              },
            },
            blockType: {
              inDropdown: true,
              options: [
                'Normal',
                'H1',
                'H2',
                'H3',
                'H4',
                'H5',
                'H6',
                'Blockquote',
                'Code',
              ],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
            fontSize: {
              icon: 'fontSize',
              options: [
                8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96,
              ],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
            fontFamily: {
              options: [
                'Arial',
                'Georgia',
                'Impact',
                'Tahoma',
                'Times New Roman',
                'Verdana',
              ],
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
              unordered: {
                icon: '/text-editor-toolbar/unordered.svg',
                className: undefined,
              },
              ordered: {
                icon: '/text-editor-toolbar/ordered.svg',
                className: undefined,
              },
            },
            textAlign: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['left', 'center', 'right', 'justify'],
              left: {
                icon: '/text-editor-toolbar/left.svg',
                className: undefined,
              },
              center: {
                icon: '/text-editor-toolbar/center.svg',
                className: undefined,
              },
              right: {
                icon: '/text-editor-toolbar/right.svg',
                className: undefined,
              },
              justify: {
                icon: '/text-editor-toolbar/justify.svg',
                className: undefined,
              },
            },
            colorPicker: {
              icon: '/text-editor-toolbar/text-color.svg',
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              colors: [
                'rgb(0,0,0)',
                'rgb(256,256,256)',
                'rgb(255,223,101)',
                'rgb(256,0,0)',
                'rgb(0,256,0)',
                'rgb(0,0,256)',
              ],
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
              link: {
                icon: '/text-editor-toolbar/link.svg',
                className: undefined,
              },
              unlink: {
                icon: '/text-editor-toolbar/unlink.svg',
                className: undefined,
              },
              linkCallback: undefined,
            },
            emoji: {
              icon: '/text-editor-toolbar/emoji.svg',
              className: 'w-12',
              component: undefined,
              popupClassName: undefined,
              emojis: [
                '😃',
                '🤣',
                '😉',
                '😍',
                '🤑',
                '🤩',
                '😭',
                '😎',
                '😜',
                '🤮',
                '😇',
                '🤬',
                '🖐',
                '👌',
                '👍',
                '👎',
                '🙏',
                '👏',
                '🔥',
                '💯',
                '🎉',
                '🔔',
                '💰',
                '🚀',
                '🌈',
                '⚡',
                '💩',
                '🌊',
                '🏆',
                '🦄',
                '😺',
                '🐵',
                '🦆',
                '🛑',
                '🌟',
                '🌞',
                '🌛',
                '❤️',
                '🕑',
                '🔔',
                '📢',
                '🔑',
              ],
            },
            image: {
              icon: '/text-editor-toolbar/image.svg',
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
              undo: {
                icon: '/text-editor-toolbar/undo.svg',
                className: undefined,
              },
              redo: {
                icon: '/text-editor-toolbar/redo.svg',
                className: undefined,
              },
            },
          }}
          required
        />
      </div>

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
  )
}