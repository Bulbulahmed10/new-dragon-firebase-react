import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-wider">Login with</h2>
      <div className="border px-4 py-2 mt-3 flex items-center gap-2 rounded-md bg-slate-100 cursor-pointer hover:bg-slate-200">
        <FcGoogle className="text-xl" />
        <span className="text-lg font-semibold text-[#159437]">
          Login with Google
        </span>
      </div>
      <div className="border px-4 py-2 mt-3 flex items-center gap-2 rounded-md bg-slate-100 cursor-pointer hover:bg-slate-200">
        <FaFacebook className="text-xl text-blue-500" />
        <span className="text-lg font-semibold text-blue-500">
          Login with Facebook
        </span>
      </div>
    </div>
  );
};

export default SocialLogin;
