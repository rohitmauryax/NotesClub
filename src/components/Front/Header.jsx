import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchResult } from "../Search/SearchResult";
import Data from "../../assets/Data";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
  const [searchField, setSearchField] = useState("");
  const [result, setResult] = useState([]);
  const handleSearch = (e) => {
    setSearchField(e.target.value);
    const Filresult = Data.filter((title) => {
      return (
        searchField &&
        title &&
        title.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setResult(Filresult);
  };
  return (
    <div className="header flex h-16 justify-between shadow-xl bg-[#343a40] text-white">
      <div className="flex">
        <div className="logo my-4">
          <Link to="/" className="px-2 text-3xl font-semibold ">
            NotesClub
          </Link>
        </div>
        <div className="options h-14 my-auto text-md font-normal  tracking-wide">
          <ul className="flex p-4 ">
            <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer hover:bg-[#161b21] rounded-md">
              <Link to={"/"}>Home</Link>
            </li>
            {user?.email == "notesclub@protonmail.com" ? (
              <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer  hover:bg-[#161b21] rounded-md">
                <Link to={"/dashboard"}>DashBoard</Link>
              </li>
            ) : null}

            <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer hover:bg-[#161b21] rounded-md">
              <Link to={"/contribute"}>Uploads</Link>
            </li>
            <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer hover:bg-[#161b21] rounded-md">
              Favourites
            </li>
            <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer hover:bg-[#161b21] rounded-md">
              Top Contributors
            </li>
            <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer hover:bg-[#161b21] rounded-md">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer hover:bg-[#161b21] rounded-md">
              <Link to={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-[456px] justify-around ">
        <div className="my-3 w-48 ">
          <input
            className="h-10 w-48 px-2 rounded-sm text-black"
            type="text"
            placeholder="Search Subject..."
            value={searchField}
            onChange={handleSearch}
          />
          <div>
            <ul className="w-auto max-h-28 overflow-y-scroll z-10 relative ">
              {searchField.length === 0
                ? null
                : result.map((title, index) => {
                    return (
                      <li
                        className="p-2 bg-white text-slate-950 bg hover:cursor-pointer border-[1px] rounded-sm border-slate-800"
                        key={index}
                        onClick={() => {
                          // setTitle(title);
                          setSearchField("");
                          setResult([]);
                        }}
                      >
                        <Link to={"/notes/" + title}>{title}</Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
        {isAuthenticated ? (
          <div className="flex">
            <div className="flex content-center ml-3 px-1">
              {" "}
              <img
                className="rounded-full h-9 w-9 my-auto"
                src={user.picture}
                alt=""
              />
            </div>
            <div className="my-auto ml-2 px-2">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div className="my-auto ml-5 px-2">
            <button onClick={() => loginWithRedirect()}>Login | Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
