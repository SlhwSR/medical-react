import React, { memo, useEffect } from 'react'
import {VideoWrapper} from './style'
import Player from "xgplayer/dist/simple_player";
import volume from "xgplayer/es/controls/volume";
import screenShot from "xgplayer/es/controls/screenShot";
import playbackRate from "xgplayer/es/controls/playbackRate";
const Video = memo(({url,poster}) => {
  useEffect(()=>{
    new Player({
        id: "mse",
        // 默认静音
        volume: 0,
        autoplay: false,
        screenShot: true,
        url,// "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
        poster,//"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        // fluid: deviceDetection(),
        controlPlugins: [volume, playbackRate, screenShot],
        //传入倍速可选数组
        playbackRate: [0.5, 0.75, 1, 1.5, 2]
      });
  })
    return (
    <VideoWrapper>
    <div id='mse'> 
    </div>
   </VideoWrapper>
  )
})

export default Video