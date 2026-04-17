import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <footer className="footer footer-horizontal footer-center text-primary-content pt-20 pb-8 gap-y-4 container mx-auto">
        <aside>
          <h2 className="text-7xl text-white">
            <span className="font-bold">Keen</span>Keeper
          </h2>
          <p className="text-[16px]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>
        <nav>
          <h5 className="text-xl">Social Links</h5>
          <div className="grid grid-flow-col gap-4  ">
            <Link to={""} className="p-2 bg-white rounded-full">
              <AiFillInstagram className="text-black text-xl" />
            </Link>
            <Link to={""} className="p-2 bg-white rounded-full">
              <FaFacebookSquare className="text-black text-xl" />
            </Link>
            <Link to={""} className="p-2 bg-white rounded-full">
              <RiTwitterXFill className="text-black text-xl" />
            </Link>
          </div>
        </nav>
        <div className="border-b border-gray-600 w-full mt-7"></div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
