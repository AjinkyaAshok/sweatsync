import React from "react";
import VideoLooper from "react-video-looper";
import myvideo from "./video/videoplayback (1).mp4";

function Video() {
  return (
    <div class="video-loop">
      {" "}
      <VideoLooper  source={myvideo} start={15.00} end={150.00} />
    </div>
  );
}

export default Video;
