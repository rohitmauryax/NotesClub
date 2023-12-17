import React from "react";
import { useLocation } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const { title, description, videoOwnerChannelTitle } = location.state.snippet;
  const { videoId } = location.state.contentDetails;
  console.log(location);
  return (
    <>
      <div className="w-[1300px] h-[740px] bg-indigo-100-50 shadow-2xl p-10 mx-auto mt-10 rounded-lg">
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
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{videoOwnerChannelTitle}</p>
      </div>
    </>
  );
};

export default VideoPlayer;
