import React from "react";
import "./singingnav.css";
import { Link } from "react-router-dom";

export default function SinginNav() {
  return (
    <div className="SinginNav">
      <Link className="link" to={"/"}>
        {" "}
        <img className="logo-user-nav" src="./images/logo.png" alt="" />
      </Link>
    </div>
  );
}
