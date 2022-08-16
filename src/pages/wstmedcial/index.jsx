import React, { memo } from 'react'
import Video from '../../components/video'

const WestMedical = memo(() => {
  return (
    <div>
      <span>medical DATA Json</span>
      <Video className=" top-20" url="https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4" poster="https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg" ></Video>
     <span className='ml-5'></span> WestMedical page
      </div>
  )
})

export default WestMedical