import React from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full max-w-[1240px] m-auto">
      <h1 className="text-center font-mono text-4xl mt-2 font-bold">
        The Dragon News
      </h1>
      <p className="text-center mt-1 ">Journalism Without Fear or Favour</p>
      <p className="text-center mt-1">
        {moment().format("dddd, MMMM d, YYYY")}
      </p>
      <div className="flex items-center gap-2 bg-[#F3F3F3] p-2 rounded-sm mt-4">
        <p className=" bg-[#D72050] text-lg px-4 py-1 text-white rounded-sm w-fit">
          Latest
        </p>
        <Marquee pauseOnHover>
          <Link>
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            labore!
          </Link>
        </Marquee>
      </div>
    </header>
  );
};

export default Header;
