import React from "react";
import Singupaccount from "../compnents/singupaccount/Singupaccount";
import Singupfooter from "../compnents/singupfooter/Singupfooter";
import Singupnav from "../compnents/singupnav/Singupnav";

export default function Singup() {
  return (
    <div className="singup">
      <Singupnav />
      <Singupaccount />
      <Singupfooter />
    </div>
  );
}
