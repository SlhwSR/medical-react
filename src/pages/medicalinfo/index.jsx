import React, { memo, useState } from 'react'
import Video from '../../components/video'
import Draggable from 'react-draggable'
import { message } from 'antd'
const MedicalInfo = memo(() => {
  const [disable,setDisable]=useState(false)
  const [xposition,setXposition]=useState(100)
  const [yposition,setYposition]=useState(100)

  const handleDrag=(e)=>{
  //   if(e.screenX>=1400||e.screenX<=445||e.screenY<=384||e.screenY>=776){
  //     message.warning("请在指定区域拖动")
  // }      
    //  setXposition(e.screenX)
    //  setYposition(e.screenY)
    setXposition(e.clientX-350)
    setYposition(e.clientY-400)
  }
  const stopTodraw=(e)=>{
    
  }
  return (
    <div className="w-full h-full bg-slate-600">
      <Draggable
       onDrag={(e)=>handleDrag(e)}
       onStop={e=>stopTodraw(e)}
       disabled={disable}
       position={{x:xposition,y:yposition}}
       >
       <div className="w-64 h-64">
       <Video  url="https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4" poster="https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg" ></Video>
       </div>
       </Draggable>
    </div>
  )
})

export default MedicalInfo