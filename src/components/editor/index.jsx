import React, { memo, useEffect, useState } from 'react'
import {Editor,Toolbar} from '@wangeditor/editor-for-react'
import {EditorWrapper} from './style'
const Leditor = memo(() => {
 const [editor,setEditor]=useState(null)
 const [html,setHtml]=useState('<p>Hello!~ WangEditor</p>')
 useEffect(()=>{
   setTimeout(() => {
     setHtml('Hello!~ WangEditor')
   }, 1000);
 },[]) 
 const toolbarConfig={}
 const editorConfig={
    placeholder:"请输入内容",
    MENU_CONF:{
        uploadImage:{
            server:"/api/upload-image",
            fieldName:"custom-field-name"
        },
        codeSelectLang:[
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'XML', value: 'xml' },
        ]
    }
 } 
 useEffect(()=>{
   return ()=>{
     if(editor==null) return
     editor.destroy()
     setEditor(null)
   }
 },[editor])
 return (
    <EditorWrapper>
         <div className="z-50" style={{border:"1px solid #ccc"}}>
           <Toolbar
           editor={editor}
           defaultConfig={toolbarConfig}
           mode="default"
           style={{borderBottom:"1px solid #ccc"}}
           />
           <Editor
           defaultConfig={editorConfig}
           value={html}
           onCreated={setEditor}
           onChange={e=>setHtml(e.getHtml())}
           mode="default"
           style={{height:'500px',overflowY:"hidden"}}
           />
         </div>
         <div style={{marginTop:"15px"}}>
               {html}
         </div>
    </EditorWrapper>
  )
})

export default Leditor