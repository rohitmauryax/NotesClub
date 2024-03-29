import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ note, nightMode }) => {
  // test
  return (
    <>
      <div
        className={
          !nightMode
            ? "rounded-3xl h-max w-[350px] cursor-pointer shadow-slate-500 shadow-sm transition-all hover:shadow-lg p-8"
            : "bg-[#3c4043] rounded-3xl h-max w-[350px] cursor-pointer shadow-slate-500 shadow-sm transition-all hover:shadow-lg p-8"
        }
      >
        <header>
          <h1 className="font-bold text-lg mx-2 p-1">
            {note.documents__data__category__document_category_name}
          </h1>
          <hr />
        </header>
        <div className="text-[0.9em] ">
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Topic:</span>
            <span className="pr-4 overflow-hidden text-ellipsis whitespace-nowrap w-48 text-right">
              {note.documents__data__document_title}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold ">Description:</span>
            <p className="pr-4 overflow-hidden text-ellipsis whitespace-nowrap w-48 text-right">
              {note.documents__data__document_description}
            </p>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Subject:</span>
            <span className="pr-4">
              {note.documents__data__subject__subject_name}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Univeristy:</span>
            <span className="pr-4">
              {
                note.documents__data__subject__course__university__university_abbreviation
              }
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Course:</span>
            <span className="pr-4">
              {note.documents__data__subject__course__course_abbreviation}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">File Size:</span>
            <span className="pr-4">
              {(note.documents__data__document_size / 1000000).toFixed(2)}MB
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Contributor:</span>
            <span className="pr-4">
              {note.documents__data__document_contributor?.name}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Uploaded on:</span>
            <span className="pr-4">june</span>
          </p>
        </div>
        <div className="flex justify-between mt-6 px-2">
          <button className="p-2 bg-blue-500 text-white rounded-md">
            <Link to={"/PdfViewer"}>Preview</Link>
          </button>
          <button className="p-2 bg-green-500 text-white rounded-md">
            <Link to={note.documents__data__document_storage_url}>
              Download
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
