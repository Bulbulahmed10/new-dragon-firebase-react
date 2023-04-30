import React from "react";
import noProfileImage from "../.././assets/no-profile.png";
import ActiveLink from "./ActiveLink";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-center mt-4 max-w-[1240px] m-auto ">
      <div className="flex justify-center gap-8 w-full ">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/career">Career</ActiveLink>
      </div>
      <div className="flex gap-3 ml-auto mr-4">
        <img className="w-10 h-10" src={noProfileImage} alt="" />
        <button className="text-lg font-bold bg-[#403F3F] text-white px-6 tracking-wider">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
