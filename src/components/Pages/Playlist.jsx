import React, { useState } from "react";
import useFetch from "../../utils/useFetch";
import Shimmer from "../Front/Shimmer";
import { Link, useParams } from "react-router-dom";

const API_KEY = "AIzaSyAcTyN4ZFIJv5PVJlWKXJckEs2IpBVO9WU";
// const API = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&id=PLrjkTql3jnm8ikiQIeIHrMYCaBfkBkfYR&key=${API_KEY}`;

const Playlist = () => {
  const { id } = useParams();
  const API = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&id=${id}&key=${API_KEY}`;
  const playlist = useFetch(API);
 

  return Object.keys(playlist).length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1 className="font-rob font-medium text-3xl m-10 text-center">
          Best Curated Playlists For The University Exam{" "}
        </h1>
        <div className="flex mx-10 my-auto justify-between rounded-sm h-[290px] w-[290px] cursor-pointer shadow-slate-500 shadow-sm transition-all hover:shadow-lg hover:scale-110">
          <Link to={"/video/"+id}>
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
      </div>
    </>
  );
};

export default Playlist;
