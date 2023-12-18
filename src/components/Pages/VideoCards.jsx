import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoCards = ({ video }) => {
  const { title, description, thumbnails } = video.snippet;
  return (
    <>
      <Link to={"/videoplayer"} state={video}>
        <div className="flex flex-col justify-between rounded-sm h-[420px] w-[350px] cursor-pointer shadow-slate-500 shadow-sm transition-all hover:shadow-lg ">
          <img src={thumbnails.high.url} alt="" />
          <h1 className="font-medium font-rob text-lg p-2">{title}</h1>
          <div className="">
            <p className="font-rob font-light p-1">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCards;
