import React from "react";
import { FaPlus } from "react-icons/fa";
import Stats from "./Stats";

const Banner = () => {
  return (
    <>
      <div className="max-w-[80%] mx-auto text-center mt-20 space-y-4">
        <h2 className="text-5xl font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h2>
        <p className="text-[16px] text-[#64748B] max-w-[40%] mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex justify-center mt-4">
          <button className="btn flex items-center gap-1 text-center bg-[#244D3F] text-white">
            <FaPlus /> Add a Friend
          </button>
        </div>
      </div>
      <Stats />
    </>
  );
};

export default Banner;
