import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
