import React from "react";
import { Link } from "react-router-dom";

export const SearchResult = ({ url }) => {
  
  return (
    <Link to={"notes/" + url} className="text-xl w-auto px-4 py-2">
      {url}
    </Link>
  );
};
