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
  const [item, setItem] = useState(8);
  return videoList === undefined || videoList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-around content-evenly gap-4 flex-wrap mt-20 ">
        {videoList.slice(0, item).map((video, index) => {
          return <VideoCards key={index} video={video} serial={index} />;
        })}
      </div>
      {item <= videoList.length && (
        <div className="flex justify-center m-10">
          <button
            className="bg-blue-500 text-white p-2 rounded-md shadow-md shadow-slate-600 hover:bg-blue-600 hover:shadow-lg"
            onClick={() => setItem(item + 8)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
