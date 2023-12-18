import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Front/Header";
import Cards from "../Front/Cards";
import Shimmer from "../Front/Shimmer";
import Video from "./Video";
export const Notes = () => {
  const { name } = useParams();
  const [filter, setFilter] = useState("all");
  const [notesData, setNotesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(6);
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
  const handleClick = () => {
    setPage(page + 3);
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
    setPage(6);
  }, [filter, name]);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  console.log(page, notesData.length);
  return isLoading ? (
    <Shimmer />
  ) : notesData.length === 0 ? (
    <div>
      <div className="flex justify-between px-24 mt-6">
        <button className="border-2 border-green-500 p-2 bg-green-500 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to="/Contribute"> Contribute</Link>
        </button>
        <select
          name="list"
          className=" shadow-md shadow-slate-400 p-2 w-44 rounded-md"
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
      <div className="flex justify-between px-24 mt-6">
        <button className="border-2 border-green-500 p-2 bg-green-500 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to="/Contribute"> Contribute</Link>
        </button>
<<<<<<< HEAD
        <button className="border-2 border-blue-600 p-2 bg-blue-600 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to={"/playlist"}>Video Tutorials</Link>
        </button>
        <form action="">
          <select
            name="list"
            className=" shadow-md shadow-slate-400 p-2 w-44 rounded-md"
          >
            <option value="ALL">All</option>
            <option value="Ebooks">Ebooks</option>
            <option value="Notes">Notes</option>
            <option value="Practicals">Practicals</option>
            <option value="PYQ's">PYQ's</option>
          </select>
        </form>
=======
        <select
          name="list"
          className=" shadow-md shadow-slate-400 p-2 w-44 rounded-md"
          onChange={handleChange}
          defaultValue={filter}
        >
          <option value="all">All</option>
          <option value="Ebooks">Ebooks</option>
          <option value="Notes">Notes</option>
          <option value="Practical Files">Practicals</option>
          <option value="Question Papers">PYQ's</option>
        </select>
>>>>>>> dbbadb3182e49adc02b4bd4ef61c51a111432c81
      </div>
      <div className=" flex flex-wrap justify-evenly gap-5 content-evenly my-10 ">
        {notesData.slice(0, page).map((note) => {
          return <Cards key={note.documents__data__document_id} note={note} />;
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
        console.log("No more data")
      )}
    </div>
  );
};
