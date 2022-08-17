import React from "react";
import Homepage from "../../homepage/page/Homepage";
import "./homepageaccount.css";

export default function Homepageaccount() {
  return (
    <div className="homepageaccount">
      <div className="homepageaccount-user">
        <p className="user-name">khalid dahir</p>
        <p className="user-logout">Log out</p>
      </div>
      <Homepage />
    </div>
  );
}
