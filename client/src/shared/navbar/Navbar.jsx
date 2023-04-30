import React from "react";
import noProfileImage from "../.././assets/no-profile.png";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mt-4 w-full max-w-[1240px] m-auto ">
      <div className="basis-4/5">
        <div className="flex justify-end gap-8 mr-[260px]">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/career">Career</ActiveLink>
        </div>
      </div>
      <div className="flex justify-end gap-3 basis-1/5">
        <img className="w-10 h-10 cursor-pointer" src={noProfileImage} alt="" />
        <Link to="/register">
          <button className="text-lg font-bold bg-[#403F3F] text-white px-4 py-2 rounded-md tracking-wider">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="text-lg font-bold bg-[#403F3F] text-white px-4 py-2 rounded-md tracking-wider">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
