import Avatar from "react-avatar";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { PiGifFill } from "react-icons/pi";
import { BiPoll } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { MdScheduleSend } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import Tweet from "./Tweet";

const CreatePost = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between border-b p-2">
        <div className="flex-1 flex justify-center items-center ">
          <div className="w-full text-center font-medium py-3 ">
            <h1 className="">For You</h1>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full text-center font-medium">
            <h1>Following</h1>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <IoSettingsOutline className="text-3xl p-1 rounded-full hover:bg-gray-200 text-center" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto ">
        <div className="border-b ">
          <div className="flex  ">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1642647450975608832/GMeXhd_J_400x400.jpg"
              size="50"
              round={true}
              className="m-2"
            />
            <div className="h-20 items-center m-2 flex">
              {" "}
              <textarea
                placeholder="What is Happening?!"
                className="flex-1  items-center border-none text-lg sm:text-2xl bg-transparent outline-none  placeholder-text-lg sm:placeholder-text-2xl resize-none"
              />
            </div>
          </div>

          <div className="flex justify-between mx-4 my-2">
            <div className="flex gap-2 text-[#1d9bf0]">
              <HiOutlinePhoto className="hover:bg-[#1d9bf0]/10 cursor-pointer rounded-full p-2 text-3xl sm:text-4xl" />
              <PiGifFill className="hover:bg-[#1d9bf0]/10 cursor-pointer rounded-full p-2 text-3xl sm:text-4xl" />
              <BiPoll className="hover:bg-[#1d9bf0]/10 cursor-pointer rounded-full p-2 text-3xl sm:text-4xl" />
              <CiFaceSmile className="hover:bg-[#1d9bf0]/10 cursor-pointer rounded-full p-2 text-3xl sm:text-4xl" />
              <MdScheduleSend className="hover:bg-[#1d9bf0]/10 cursor-pointer rounded-full p-2 text-3xl sm:text-4xl" />
              <LuMapPin className="hover:bg-[#1d9bf0]/10 cursor-pointer rounded-full p-2 text-3xl sm:text-4xl" />
            </div>
            <button className="bg-[#1d9bf0] rounded-3xl text-white px-6 py-2 sm:px-8 sm:py-2.5">
              Post
            </button>
          </div>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
