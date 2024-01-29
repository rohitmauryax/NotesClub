import React, { useState } from "react";
import { Form, Link, json } from "react-router-dom";
import Data from "../../assets/Data";
import { createRef } from "react";
import Swal from "sweetalert2";
export const Contribute = () => {
  const fileInput = createRef();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    university: "",
    branch: "",
    subject: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);
    formData.set("uploadUser", JSON.stringify(userData));
    console.log(formData);
    try {
      const resposnse = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await resposnse.json();
      if (resposnse.ok) {
        Swal.fire({
          title: "SUCCESS!",
          text: "File Uploaded Successfully",
          icon: "success",
        });
        // alert("file uploaded");
      } else {
        console.log("some error occur");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className=" rounded-md text-center my-44 w-1/2 mx-auto shadow-xl shadow-slate-700">
      <h1 className="font-rob font-semibold p-3 text-4xl text-slate-600 w-max mx-auto">
        UPLOAD FILES
      </h1>
      <form
        className="flex flex-col space-y-4 h-3/5 w-2/4 mx-auto text-black"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          className="rounded-md h-12 shadow-md shadow-slate-300"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="rounded-md h-12 shadow-md shadow-slate-300"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <select
          name="university"
          onChange={handleChange}
          className="rounded-md h-12 shadow-md shadow-slate-300"
        >
          <option selected>Select University</option>
          <option value="ipu">IPU</option>
          <option value="aktu">AKTU</option>
          <option value="igdtu">IGDTU</option>
        </select>
        <select
          name="branch"
          onChange={handleChange}
          className="rounded-md h-12 shadow-md shadow-slate-300"
        >
          <option selected>Select Branch</option>
          <option value="cs">CS</option>
          <option value="it">IT</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
        </select>
        <select
          name="subject"
          className="rounded-md h-12 shadow-md shadow-slate-300"
          onChange={handleChange}
        >
          <option selected>Select Subject</option>
          {Data.map((single, id) => {
            return (
              <option key={id} value={single}>
                {single}
              </option>
            );
          })}
        </select>
        <input
          className="rounded-md "
          type="file"
          name="avatar"
          ref={fileInput}
        />
        <div className="flex justify-between p-2">
          <button className="bg-red-500 p-1 w-28 text-white text-lg font-semibold rounded-md ">
            <Link to={"/"}>Cancel</Link>
          </button>
          <button
            className="bg-green-500 p-1 w-28 text-white text-lg font-semibold rounded-md "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
