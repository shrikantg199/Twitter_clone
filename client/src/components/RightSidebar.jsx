import Avatar from "react-avatar";

const RightSidebar = () => {
  return (
    <>
      <div className="sm:flex items-center justify-center hidden   ">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
            <svg
              className="w-4 h-4 focus:text-blue-600 focus:ring-1 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block sm:w-96 m-2 p-4 placeholder:text-black/50 ps-10 text-sm text-white rounded-full focus:ring-blue-500 bg-gray-500/40 focus:outline-none focus:ring-1 outline-none "
            placeholder="Search"
            required
          />
        </div>
      </div>
      <div className="flex justify-center items-center m-4">
        <div className=" bg-gray-500/10 h-[400px] w-[420px] rounded-xl ">
          <h1 className="font-bold text-xl m-4 ">Who to follow</h1>
          <div className="flex justify-between items-center mx-4">
            <div className="flex">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1642647450975608832/GMeXhd_J_400x400.jpg"
                size="50"
                round={true}
                className="m-2"
              />
              <div className="m-3">
                <h1 className="font-bold">name</h1>
                <h1 className="">username</h1>
              </div>
            </div>
            <div className="">
              {" "}
              <button className="bg-black px-6 py-2 rounded-full  text-white">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
