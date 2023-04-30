import React from "react";

import SocialLogin from "../../components/socialLogin/SocialLogin";
import SocialConnected from "../../components/socialConnected/SocialConnected";
import QZone from "../../components/qZone/QZone";
import Advertisement from "../../components/advertisement/Advertisement";
const RightNav = () => {
  return (
    <div className="basis-1/5">
      <SocialLogin />
      <SocialConnected />
      <QZone />
      <Advertisement />
    </div>
  );
};

export default RightNav;
