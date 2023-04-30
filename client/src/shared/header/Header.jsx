import React, { useEffect, useState } from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import logo from "../.././assets/logo.png";
const Header = () => {
  const [newsTitles, setNewsTitles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/news")
      .then((res) => res.json())
      .then((data) => setNewsTitles(data));
  }, []);
  return (
    <header className="w-full max-w-[1240px] m-auto">
      <img className="m-auto mt-4" src={logo} alt="" />
      <p className="text-center mt-2 text-lg  font-mono ">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center mt-1 font-mono text-[#917272]">
        {moment().format("dddd, MMMM d, YYYY")}
      </p>
      <div className="flex items-center gap-2 bg-[#F3F3F3] p-2 rounded-sm mt-4">
        <p className=" bg-[#D72050] text-lg px-4 py-1 text-white rounded-sm w-fit">
          Latest
        </p>
        <Marquee pauseOnHover>
          {newsTitles &&
            newsTitles.map((singleNewsTitle) => (
              <Link
                className="mx-6 hover:text-blue-500 font-medium text-lg font-mono"
                to={`news/${singleNewsTitle._id}`}
                key={singleNewsTitle._id}>
                <span className="mr-2">||</span> {singleNewsTitle.title}{" "}
                <span className="ml-2">||</span>
              </Link>
            ))}
        </Marquee>
      </div>
    </header>
  );
};

export default Header;
