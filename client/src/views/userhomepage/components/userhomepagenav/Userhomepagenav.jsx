import React from "react";
import "./userhomepagenav.css";

export default function Userhomepagenav() {
  return (
    <div className="userhomepagenav">
      <div className="userhomepagenavall">
        <img className="logo-user-nav" src="./images/logo.png" alt="" />
        <div className="userhomepage-nav-user-logout">
          <i className="fa-solid fa-user userhomepage-nav"></i>
          <p className="user-name-nav">khalid dahir</p>
          <p>log out</p>
        </div>
      </div>
    </div>
  );
}
