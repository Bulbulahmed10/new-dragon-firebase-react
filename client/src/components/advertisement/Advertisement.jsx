import React from "react";
import advertiseImage from "../.././assets/bg.png";
const Advertisement = () => {
  return (
    <div
      className="py-16 mt-6 px-4"
      style={{ backgroundImage: `url(${advertiseImage})` }}>
      <h4 className="text-3xl font-bold text-center text-white capitalize ">
        create an amazing newspaper
      </h4>
      <p className="text-center text-white mt-4">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>
      <button className="text-white font-semibold text-lg bg-[#D72050] px-6 py-3 border-none mt-4 ml-8 rounded-sm">
        Learn More
      </button>
    </div>
  );
};

export default Advertisement;
