import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "font-medium text-violet-500 text-lg"
          : "font-medium text-[#706F6F] text-lg"
      }>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
