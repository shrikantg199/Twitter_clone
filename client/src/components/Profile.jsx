import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className=" h-14 flex items-center sticky p-2 gap-12">
        <Link to="/">
          <BiArrowBack className="text-2xl cursor-pointer" />
        </Link>

        <div className="">
          {" "}
          <h1 className="font-bold text-xl">Shrikant Gaikwad</h1>
          <h1>16 posts</h1>
        </div>
      </div>

      <div className="relative ">
        <img
          src="https://pbs.twimg.com/profile_banners/1743576393236258816/1705772134/1500x500"
          className=""
          alt=""
        />

        <div className="absolute sm:top-32 top-20 ml-3   sm:ml-10 ">
          <img
            src="https://pbs.twimg.com/profile_images/1746472121579245568/9SgeyOyK_400x400.jpg"
            alt=""
            className="rounded-full h-28 w-28   sm:h-40 sm:w-40 border-4 border-white  "
          />
        </div>
        <div className="sm:m-8 m-6 text-right">
          <button className="border rounded-full px-6 py-1  ">
            Edit profile
          </button>
        </div>
        <div className="ml-4">
          <h1 className="font-bold text-2xl">Shrikant Gaikwad</h1>
          <h1 className="text-gray-400 ">@its_shri_11</h1>
          <h1 className="my-4 ">
            MERN Stack Dev. | Full-time Coder, part-time fitness enthusiast.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
