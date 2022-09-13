import React from "react";
import { Link } from "react-router-dom";
import "./sponsore.css";


export default function Sponsored({ve}) {
  return (
    <div className="sponsored">
      <div className="sponsored-card">
        <div className="sponsored-card-elemts">
          <div className="sponsored-card-img-time">
          <Link className="link" to={"/Singlelot"}> <img className="sponsored-card-img" src="" alt="" /></Link>
           
            <div className="card-time">14:20</div>
          </div>

          <div className="sponsored-card-items">
            <p className="sponsored-card-title">{ve.desc}</p>
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


