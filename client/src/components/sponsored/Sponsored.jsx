import React from "react";
import "./sponsore.css";

export default function Sponsored(props) {
  return (
    <div className="sponsored">
      <div className="sponsored-card">
        <div className="sponsored-card-elemts">
          <div className="sponsored-card-img-time">
            <img className="sponsored-card-img" src={props.imgs} alt="" />
            <div className="card-time">14:20</div>
          </div>

          <div className="sponsored-card-items">
            <p className="sponsored-card-title">what is life ?</p>
            <div className="views">
              <p className="views-number">10k</p>
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
