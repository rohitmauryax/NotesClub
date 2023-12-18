import React, { useEffect, useState } from "react";
import Shimmer from "../Front/Shimmer";
import VideoCards from "./VideoCards";
import useFetch from "../../utils/useFetch";

const API = "AIzaSyAcTyN4ZFIJv5PVJlWKXJckEs2IpBVO9WU";
const URL = "https://www.googleapis.com/youtube/v3/playlistItems";
const FINAL_API = `${URL}?key=${API}&part=snippet%2CcontentDetails&maxResults=100&playlistId=PLrjkTql3jnm8ikiQIeIHrMYCaBfkBkfYR`;

const Video = () => {
  const video = useFetch(FINAL_API);
  const videoList = video.items;
  console.log(videoList);

  return videoList === undefined || videoList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-around content-evenly gap-2 flex-wrap my-4 ">
      {videoList.map((video, index) => {
        return <VideoCards key={index} video={video} />;
      })}
    </div>
  );
};

export default Video;
