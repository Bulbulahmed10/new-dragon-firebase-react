import React from "react";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-full max-w-[1240px] m-auto">
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
