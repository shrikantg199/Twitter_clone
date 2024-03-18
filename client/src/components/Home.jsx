import React from "react";
import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-10">
      <div className="min-h-screen hidden sm:block sm:col-span-3 border-r ">
        <LeftSidebar />
      </div>
      <div className=" sm:col-span-4 h-10   ">
        <Outlet />
      </div>
      <div className="min-h-screen hidden sm:block border-l sm:col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
