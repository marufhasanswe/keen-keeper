import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Navbar />
      <Outlet />
      <Footer />

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
