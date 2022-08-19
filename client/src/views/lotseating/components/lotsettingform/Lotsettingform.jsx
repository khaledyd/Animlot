import React from "react";
import "./lotsettingform.css";
import { Link } from "react-router-dom";

export default function Lotsettingform() {
  return (
    <div className="lotseetingform">
      <form className="lotform">
        <h1>setting your lot</h1>
        <span className="singng-span">Lot name</span>
        <input className="singing-email" type="text" />
        <span className="singng-span">Select Category</span>
        <select className="categories">
        <option value="volvo">select categories</option>
          <option value="volvo">Technology</option>
          <option value="saab">Scince</option>
          <option value="opel">Nature</option>
          <option value="audi">Lifestyle</option>
        </select>
        
<Link className="link" to={"/Ccreator"}> <button className=" create-lot">Create Your  Lot</button> </Link>
        
      </form>
    </div>
  );
}
