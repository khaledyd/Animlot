import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo-and-mainu">
        <i class="fa-solid fa-bars"></i>
        <img className="logo" src="./images/logo.png" alt="" />
      </div>
      <div className="search-area">
        <div className="what-is-and-how-it-works">
          <div className="what-is">
            <span className="what-is-text">what is ..?</span>
            <input className="what-is-input" type="text"></input>
          </div>
          <div className="how-it-wrks">
            <span className="how-it-iworks-text">what is ..?</span>
            <input className="how-it-works-input" type="text"></input>
          </div>
        </div>

        <button className="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="account">
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
}
