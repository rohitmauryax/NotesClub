import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoCards = ({ video }) => {
  const { title, description, thumbnails } = video.snippet;
  return (
    <>
      <Link to={"/videoplayer"} state={video}>
        <div className="rounded-sm h-96 w-[350px] cursor-pointer shadow-slate-500 shadow-sm transition-all hover:shadow-lg ">
          <img src={thumbnails.high.url} alt="" />
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default VideoCards;
