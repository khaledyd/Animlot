import React from "react";
import "./userhomepageinfromation.css"

export default function Userhomepageinfromation() {
  return (
    <div className="userhomepageinfromation">
      <div className="Singupaccount-all">
        <h1 className="account-title">Update infromation</h1>
        <form className="singup-form">
          <span className="singup-span">First Name</span>
          <input className="singup-email" type="text" />
          <span className="singup-span">Last Name</span>
          <input className="singup-password" type="text"></input>
          <span className="singup-span">current Password</span>
          <input className="singup-password" type="password"></input>
          <span className="singup-span">New Password</span>
          <input className="singup-password" type="password"></input>
          <span className="singup-span">Confirm new Password</span>
          <input className="singup-password" type="password"></input>
          <button className="singup-btn">Update </button>

        
        </form>
      </div>
    </div>
  );
}
