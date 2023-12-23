import React from "react";
import { useState } from "react";
import Sidebar from "../Front/dashboard/Sidebar";
import Home from "../Front/dashboard/Home";
import "../Front/dashboard/dash.css";

export const Dasboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container ">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
};
