import React from "react";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  const sidebarElements = [
    {
      icon: <IoHome />,
      name: "Home",
      Link: "/",
    },
    {
      icon: <FaSearch />,
      name: "Explore",
      Link: "/Explore",
    },
    {
      icon: <IoIosNotifications />,
      name: "Notification",
      Link: "/",
    },

    {
      icon: <RiTwitterXFill />,
      name: "Premium",
      Link: "/profile",
    },
    {
      icon: <CgProfile />,
      name: "Profile",
      Link: "/profile",
    },
    {
      icon: <FaBookmark />,
      name: "Bookmark",
      Link: "/bookmark",
    },
    {
      icon: <IoMdLogIn />,
      name: "Logout",
      Link: "/profile",
    },
  ];
  return (
    <div className="flex justify-center items-center ml-8">
      <ul className="text-center m-8  ">
        {" "}
        <Link to="/">
          <RiTwitterXFill className="text-3xl cursor-pointer hover:bg-gray-500/10 h-12 w-10 rounded-full p-1 ml-2" />
        </Link>
        {sidebarElements.map((item, index) => (
          <Link key={index} to={item.Link}>
            <li className="flex justify-start items-center hover:bg-gray-500/10 hover:text-[#1d9bf0]  cursor-pointer rounded-full ">
              <span className="text-2xl m-4 ">{item.icon}</span>{" "}
              <span className="text-2xl  hover:text-[#1d9bf0] ">
                {item.name}
              </span>
            </li>
          </Link>
        ))}
        <button className="px-24 m-2 text-white py-2 bg-[#1d9bf0] rounded-full text-2xl">
          post
        </button>
      </ul>
    </div>
  );
};

export default LeftSidebar;
