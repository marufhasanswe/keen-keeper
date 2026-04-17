import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-[#64748B] text-[16px] mx-2 flex items-center gap-1 ${isActive && "bg-[#244D3F] rounded-md text-white font-medium px-4 py-1"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
