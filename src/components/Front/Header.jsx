import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
  const [searchField, setSearchField] = useState("");
  const handleSearch = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
  };
  return (
    <div className="header flex h-16  shadow-xl bg-[#343a40] text-white">
      <div className="logo my-4">
        <h1 className="px-2 text-3xl font-semibold ">NotesClub</h1>
      </div>
      <div className="options h-14 my-auto text-md font-normal  tracking-wide">
        <ul className="flex p-4 ">
          <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer hover:bg-[#161b21] rounded-md">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-6 py-1 transition-colors hover:text-[#f8b40e] hover:cursor-pointer  hover:bg-[#161b21] rounded-md">
            DashBoard
          </li>
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
      <div className="my-auto ml-32">
        <input
          className="rounded-sm text-black"
          type="text"
          placeholder="Search Subject..."
          value={searchField}
          onChange={handleSearch}
        />
      </div>
      {isAuthenticated && (
        <div className="flex content-center ml-3 px-1">
          {" "}
          <img
            className="rounded-full h-9 w-9 my-auto"
            src={user.picture}
            alt=""
          />
        </div>
      )}
      {isAuthenticated ? (
        <div className="my-auto ml-2 px-2">
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="my-auto ml-5 px-2">
          <button onClick={() => loginWithRedirect()}>Login/Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Header;
