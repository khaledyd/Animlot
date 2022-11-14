import React from "react";
import "./userhomepagenav.css";
import { Link } from "react-router-dom";

export default function Userhomepagenav() {
  return (
    <div className="userhomepagenav">
      <div className="userhomepagenavall">
      <Link className="link" to={"/"}>
{" "}
<img className="logo-user-nav" src="./images/logo.png" alt="" />
</Link>
       
        <div className="userhomepage-nav-user-logout">
          <i className="fa-solid fa-user userhomepage-nav"></i>
          <p className="user-name-nav">khalid dahir</p>
          <Link className="link" to={"/"}>
            {" "}
            <p>log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
