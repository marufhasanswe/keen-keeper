import React from "react";
import MyLink from "./MyLink";
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[90%] mx-auto">
        <div className="flex-1">
          <a className="text-2xl">
            <span className="font-bold">Keen</span>Keeper
          </a>
        </div>
        <div className="flex items-center">
          <MyLink to="/">
            <RiHome2Line /> Home
          </MyLink>
          <MyLink to="/timeline">
            <CiClock2 /> Timeline
          </MyLink>
          <MyLink to="/stats">
            <GoGraph /> Stats
          </MyLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
