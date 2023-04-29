import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => {
          isActive
            ? "font-bold text-violet-600 text-lg"
            : "font-bold text-[#706F6F] text-lg";
        }}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
