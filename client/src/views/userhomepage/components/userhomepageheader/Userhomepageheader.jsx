import React from "react";
import "./userhomepageheader.css"

export default function Userhomepageheader() {
  return (
    <div className="Userhomepageheader">
      <div className="userhomepage-btns">
        <button className="content-creator-btn">content creator</button>
        <button className="animation-maker-btn">aimation maker</button>
      </div>
      <div className="header-text">
        <p className="header-txt">
          You can create <strong>animation</strong> or you can create A <strong>content</strong> that can solve a
          lot of peoples{" "}
        </p>
      </div>
      <div className="header-box"></div>
      <div className="header-box1"></div>
    </div>
  );
}
