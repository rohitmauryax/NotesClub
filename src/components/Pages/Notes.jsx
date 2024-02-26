import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import Header from "../Front/Header";
import Cards from "../Front/Cards";
import Shimmer from "../Front/Shimmer";
import Video from "./Video";

export const Notes = () => {
  const { name } = useParams();
  const nightMode = useOutletContext();
  const [filter, setFilter] = useState("all");
  const [notesData, setNotesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(6);
  const [playlistId, setPlaylistID] = useState("");
  const loadData = async () => {
    let response = await fetch(
      `http://localhost:5000/api/query?search=${name}&filter=${filter}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    setNotesData(response);
    setIsLoading(false);
  };
  const loadPlaylistData = async () => {
    let response = await fetch(
      `http://localhost:5000/api/playlist/query?tag=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    setPlaylistID(response[0]?.api);
  };
  const handleClick = () => {
    setPage(page + 3);
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
    setPage(6);
    setFilter("all");
    loadPlaylistData();
  }, [name]);

  useEffect(() => {
    setIsLoading(true);
    loadData();
    setPage(6);
  }, [filter]);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
 
  return isLoading ? (
    <Shimmer />
  ) : notesData.length === 0 ? (
    <div>
      <div className="flex justify-between px-24 mt-6 text-black">
        <button className="border-2 border-green-500 p-2 bg-green-500 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to="/Contribute"> Contribute</Link>
        </button>
        <button className="border-2 border-blue-600 p-2 bg-blue-600 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to={"/playlist/" + playlistId}>Video Tutorials</Link>
        </button>
        <select
          name="list"
          className=" shadow-md shadow-slate-400 p-2 w-44 rounded-md text-black"
          onChange={handleChange}
          value={filter}
        >
          <option value="all">All</option>
          <option value="Ebooks">Ebooks</option>
          <option value="Notes">Notes</option>
          <option value="Practical Files">Practicals</option>
          <option value="Question Papers">PYQ's</option>
        </select>
      </div>
      <h1 className="text-4xl text-center mt-10">No Data Found</h1>
    </div>
  ) : (
    <div>
      <div className="flex justify-between px-24 mt-16">
        <button className="border-2 border-green-500 p-2 bg-green-500 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to="/Contribute"> Contribute</Link>
        </button>
        <button className="border-2 border-blue-600 p-2 bg-blue-600 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to={"/playlist/" + playlistId}>Video Tutorials</Link>
        </button>
        <select
          name="list"
          className=" shadow-md shadow-slate-400 p-2 w-44 rounded-md text-black"
          onChange={handleChange}
          defaultValue={filter}
        >
          <option value="all">All</option>
          <option value="Ebooks">Ebooks</option>
          <option value="Notes">Notes</option>
          <option value="Practical Files">Practicals</option>
          <option value="Question Papers">PYQ's</option>
        </select>
      </div>
      <div className=" flex flex-wrap justify-evenly gap-5 content-evenly my-10 ">
        {notesData.slice(0, page).map((note, index) => {
          return (
            <Cards
              key={note.documents__data__document_id}
              note={note}
              nightMode={nightMode[0]}
            />
          );
        })}
      </div>
      {page < notesData.length ? (
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="px-5 py-3 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Load More
          </button>
        </div>
      ) : (
        // console.log("No more data")
        null
      )}
    </div>
  );
};

//
