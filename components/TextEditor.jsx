import dynamic from "next/dynamic"
//import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //toolbar
import { useState } from "react";
import { convertToRaw, convertFromRaw } from "draft-js";

//https://www.draft-js-plugins.com/plugin/resizeable

//solution to window is undefined bcuz of ssr
const Editor = dynamic(() => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
)

function TextEditor() {
  // const { name } = props.session.user
  // const { id } = router.query
  // const router = useRouter()
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)

    // updateDoc(doc(db, "userDocs", name, "docs", id), {
    //   // fileName: input,
    //   // timestamp: serverTimestamp()
    //   editorState: convertToRaw(editorState.getCurrentContent())
    // }, {
    //   merge: true,
    // });
  }

  // useEffect(() => {
  //   if(id){
  //     const unsuscribe = onSnapshot(
  //       query(doc(db, 'userDocs', name, "docs", id)),
  //       (snapshot) => {
  //         setEditorState(
  //           EditorState.createWithContent(convertFromRaw(snapshot.data().editorState)))
  //       }
  //       );
  //       return unsuscribe;
  //     }
  //   }, [db, id]);


  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
     <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange} 
      toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
      editorClassName="mt-6 bg-white shadow-lg w-full !h-screen xl:w-A4 xl:!h-A4 !overflow-hidden mx-auto mb-12 p-24 border"
     />
    </div>
  )
}

export default TextEditor