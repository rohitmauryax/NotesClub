import React from "react";
import { useLocation } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const { title, description, videoOwnerChannelTitle } = location.state.snippet;
  const { videoId } = location.state.contentDetails;
 
  return (
    <>
      <div className="w-[1300px] h-[750px] bg-indigo-100-50 shadow-2xl p-10 mx-auto mt-10 rounded-lg">
        <iframe
          width="1200px"
          height="600px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mx-auto rounded-md"
        ></iframe>
        <h1 className="font-bold font-rob text-lg p-2">{title}</h1>
        <p className="font-rob font-light p-1">{description}</p>
        <p className="font-rob font-light p-1">{videoOwnerChannelTitle}</p>
      </div>
    </>
  );
};

export default VideoPlayer;
