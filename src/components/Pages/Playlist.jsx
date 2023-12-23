import React, { useState } from "react";
import useFetch from "../../utils/useFetch";
import Shimmer from "../Front/Shimmer";
import { Link } from "react-router-dom";

const API_KEY = "AIzaSyAcTyN4ZFIJv5PVJlWKXJckEs2IpBVO9WU";
const API = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&id=PLrjkTql3jnm8ikiQIeIHrMYCaBfkBkfYR&key=${API_KEY}`;

const Playlist = () => {
  const playlist = useFetch(API);
  console.log(playlist);

  return Object.keys(playlist).length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex m-4 justify-between rounded-sm h-[290px] w-[290px] cursor-pointer shadow-slate-500 shadow-sm transition-all hover:shadow-lg hover:scale-110">
        <Link to={"/video"}>
          <img
            className="w-72 h-72 mx-auto my-auto rounded-sm "
            src={playlist.items["0"].snippet.thumbnails.high.url}
            alt=""
          />
          <h1 className="relative bottom-36 text-white opacity-50 font-rob font-semibold text-4xl rounded-md bg-slate-500 text-center h-14 ">
            Videos {playlist.items["0"].contentDetails.itemCount}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Playlist;
