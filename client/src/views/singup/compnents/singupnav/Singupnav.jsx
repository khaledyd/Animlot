import React from "react";
import SinginNav from "../../../sining/components/singinnav/SinginNav";
import { Link } from "react-router-dom";

export default function Singupnav() {
  return (
    <div>
      <Link className="link" to={"/"}>
        {" "}
        <SinginNav />
      </Link>
    </div>
  );
}
