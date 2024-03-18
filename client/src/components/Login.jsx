import { Link } from "react-router-dom";
import logo from "../assets/X-Logo-removebg-preview.png";
import { useState } from "react";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const handleSignup = () => {
    setIsLogIn(!isLogIn);
  };
  return (
    <div className="w-screen flex h-screen items-center  justify-center">
      <div className="flex  justify-center items-center gap-12">
        <div className="">
          <img src={logo} alt="" className="h-80" />
        </div>
        <div>
          <div className="m-4 ">
            {" "}
            <h1 className="text-7xl font-bold">Happening Now</h1>
          </div>

          <form className="flex flex-col justify-center gap-2 items-center">
            <h1 className="text-2xl m-3 font-bold">Log In</h1>
            {!isLogIn && (
              <>
                {" "}
                <input
                  type="text"
                  placeholder="Name"
                  className=" border w-64 py-2 rounded-full   text-md px-3 outline-none "
                />
                <input
                  type="text"
                  placeholder="Username"
                  className=" border w-64 py-2 rounded-full  text-md px-3 outline-none "
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email"
              className=" border w-64 py-2 rounded-full  text-md px-3 outline-none "
            />
            <input
              type="text"
              placeholder="Password"
              className=" border w-64 py-2 rounded-full my-3 text-md px-3 outline-none "
            />
            <button className="bg-[#1d9bf0] text-white border w-64 py-2 rounded-full my-3 text-md px-3 outline-none ">
              Login
            </button>
            <div className="text-center ">
              {isLogIn ? "do not have account " : "Already have an account"} ?
              <span
                onClick={handleSignup}
                className="m-3 text-blue-700 font-bold cursor-pointer"
              >
                {isLogIn ? "Sign Up " : "Log In"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
