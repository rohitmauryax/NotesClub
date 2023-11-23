import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Front/Header";
import Cards from "./Cards";
import Shimmer from "../Front/Shimmer";
export const Notes = () => {
  const { name } = useParams();
  const [filter, setFilter] = useState("all");
  const [notesData, setNotesData] = useState([]);
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
  };
  useEffect(() => {
    loadData();
  }, [filter]);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return notesData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-between px-24 mt-6">
        <button className="border-2 border-green-500 p-2 bg-green-500 text-white rounded-md w-40 shadow-md shadow-slate-600">
          <Link to={"/Contribute"}> Contribute</Link>
        </button>
        <form action="">
          <select
            name="list"
            className=" shadow-md shadow-slate-400 p-2 w-44 rounded-md"
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="Ebooks">Ebooks</option>
            <option value="Notes">Notes</option>
            <option value="Practical Files">Practicals</option>
            <option value="Question Papers">PYQ's</option>
          </select>
        </form>
      </div>
      <div className=" flex flex-wrap justify-evenly gap-5 content-evenly my-10 ">
        {notesData.map((note) => {
          return <Cards key={note.documents__data__document_id} note={note} />;
        })}
      </div>
    </div>
  );
};
