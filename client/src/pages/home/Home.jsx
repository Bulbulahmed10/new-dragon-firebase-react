import React from "react";
import LeftNav from "../../components/leftNav/LeftNav";
import RightNav from "../../shared/rightNav/RightNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-8 flex flex-row gap-4">
      <LeftNav />
      <div className="basis-3/5">
        <Outlet />
      </div>
      <RightNav />
    </div>
  );
};

export default Home;
