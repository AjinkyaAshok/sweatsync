import React from "react";
import VideoLooper from "react-video-looper";
import myvideo from "./video/videoplayback(1).mp4";

function Video() {
  return (
    <div className="shadow-slate-600 mx-auto">
      <VideoLooper height="45vh" source={myvideo} start={15.00} end={150.00} autoplay={true}/>
    </div>
  );
}

export default Video;