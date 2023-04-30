import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
const SocialConnected = () => {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-wider mt-4">Find us on</h2>
      <div className="mt-2">
        <a
          href="#"
          className="flex items-center gap-2 border border-b-0 px-4 py-2">
          <FaFacebook className="text-xl text-[#3b5998] " />
          <span className="text-[#706F6F] font-semibold text-lg">Facebook</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 border border-b-0 px-4 py-2">
          <BsTwitter className="text-xl text-[#00acee] " />
          <span className="text-[#706F6F] font-semibold text-lg">Twitter</span>
        </a>
        <a href="#" className="flex items-center gap-2 border px-4 py-2">
          <BsInstagram className="text-xl text-[#d62976] " />
          <span className="text-[#706F6F] font-semibold text-lg">
            Instagram
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialConnected;
