import React from "react";
import { NavLink } from "react-router-dom";

const CategoryActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "py-2 text-lg font-semibold text-[#403F3F] bg-[#E7E7E7] px-4 rounded-md tracking-wide"
          : "py-2 text-lg font-semibold text-[#9F9F9F] hover:bg-[#E7E7E7] px-4 rounded-md hover:text-[#403F3F] tracking-wide"
      }>
      {children}
    </NavLink>
  );
};

export default CategoryActiveLink;
