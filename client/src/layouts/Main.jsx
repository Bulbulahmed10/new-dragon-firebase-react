import React from "react";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

import LeftNav from "../components/leftNav/LeftNav";
import RightNav from "../shared/rightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <LeftNav />

        <Outlet />

        <RightNav />
      </main>
    </div>
  );
};

export default Main;
