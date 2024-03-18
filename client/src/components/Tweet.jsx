import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
const Tweet = () => {
  return (
    <div className="border-b hover:bg-gray-500/10 cursor-pointer">
      <blockquote className="twitter-tweet flex ">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1642647450975608832/GMeXhd_J_400x400.jpg"
          size="50"
          round={true}
          className="m-2"
        />
        <div className="m-2">
          <p className="flex gap-3">
            <h1 className="font-bold">Lets Code</h1>
            <h1 className="text-gray-500">@letscodedevs</h1>
            <h1 className="text-gray-500">10h</h1>
          </p>
          <p lang="en" dir="ltr">
            I&#39;m learning JavaScript, You?
          </p>
          &mdash; Madhu Saini (@MadhuSaini22){" "}
          <a href="https://twitter.com/MadhuSaini22/status/1768668982285152499?ref_src=twsrc%5Etfw">
            March 15, 2024
          </a>
        </div>
      </blockquote>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
      <div className="mx-12 my-3 flex gap-3 justify-between ">
        <div className="flex gap-2 text-xl justify-center items-center">
          <FaRegComment className="text-xl cursor-pointer" />
          <p>0</p>
        </div>
        <div className="flex gap-2 text-xl justify-center items-center">
          <FaRegHeart className="text-xl cursor-pointer" />
          <p>0</p>
        </div>
        <div className="flex gap-2 text-xl justify-center items-center">
          <IoBookmarkOutline className="text-xl cursor-pointer" />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
