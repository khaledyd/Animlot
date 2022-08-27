import React from "react";
import "./lotsettingform.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Lotsettingform() {
  const [pageName, setPageName] = useState("");
  const [catName, setCatName] = useState("");

  const handlepageSubmit = async (e)=> { 
    e.preventDefault()
    const res = await axios.post("/pages",{
      pageName,
      catName,
    
    });
    console.log(res)
   
   
  } 


  return (
    <div className="lotseetingform">
      <form className="lotform" onSubmit={handlepageSubmit}>
        <h1>setting your lot</h1>
        <span className="singng-span">Lot name</span>
        <input className="singing-email"
         type="text"
         placeholder="lot Name"
         onChange={e => setPageName(e.target.value)}
          />
        <span className="singng-span">Select Category</span>
        <select className="categories"
           onChange={e => setCatName(e.target.value)}

        >
          <option value="volvo">select categories</option>
          <option value="volvo">Technology</option>
          <option value="saab">Scince</option>
          <option value="opel">Nature</option>
          <option value="audi">Lifestyle</option>
        </select>

        <input type="submit" className=" create-lot"/>
      </form>
    </div>
  );
}
