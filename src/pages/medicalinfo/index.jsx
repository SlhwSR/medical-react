import React, { memo, useState } from 'react'
import Video from '../../components/video'
import Draggable from 'react-draggable'
const MedicalInfo = memo(() => {
  const [disable,setDisable]=useState(false)
  const handleDrag=(e)=>{
    if(e.screenX>=1400||e.screenX<=445||e.screenY<=384||e.screenY>=776){
      setDisable(true)
  }      
  }
  const stopTodraw=(e)=>{
    console.log(e);  
  }
  return (
    <div className="w-full h-full bg-slate-600">
      <Draggable
       scale={1}
       onDrag={(e)=>handleDrag(e)}
       onStop={e=>stopTodraw(e)}
       disabled={disable}
       >
       <div className="">
       <Video className="" url="https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4" poster="https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg" ></Video>
       </div>
       </Draggable>
    </div>
  )
})

export default MedicalInfo