import React from "react";
import qZone1 from "../.././assets/qZone1.png";
import qZone2 from "../.././assets/qZone2.png";
import qZone3 from "../.././assets/qZone3.png";
const QZone = () => {
  return (
    <div className="bg-[#E8EFF3] mt-6 px-1 py-2">
      <h2 className="text-xl font-bold tracking-wider mt-4 px-3">Q-Zone</h2>
      <img className="w-[260px] h-[220px] mt-4" src={qZone1} alt="" />
      <img className="w-[260px] h-[220px]" src={qZone2} alt="" />
      <img className="w-[260px] h-[220px]" src={qZone3} alt="" />
    </div>
  );
};

export default QZone;
