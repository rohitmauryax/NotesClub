import React, { useEffect, useState } from "react";
import Shimmer from "../Front/Shimmer";
import VideoCards from "./VideoCards";

const API = "AIzaSyAcTyN4ZFIJv5PVJlWKXJckEs2IpBVO9WU";
const URL = "https://www.googleapis.com/youtube/v3/playlistItems";

const Video = () => {
  const [videoList, setVideoList] = useState([]);
  console.log(videoList);

  const youtubeFetch = async () => {
    const raw = await fetch(
      `${URL}?key=${API}&part=snippet%2CcontentDetails&maxResults=100&playlistId=PLrjkTql3jnm8ikiQIeIHrMYCaBfkBkfYR`
    );
    const data = await raw.json();
    setVideoList(data.items);
  };

  useEffect(() => {
    youtubeFetch();
  }, []);

  return videoList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-around content-evenly gap-2 flex-wrap my-4 ">
      {videoList.map((video) => {
        return <VideoCards video={video} />;
      })}
    </div>
  );
};

export default Video;
