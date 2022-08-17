import React from "react";
import "./singupaccount.css";

export default function Singupaccount() {
  return (
    <div className="Singupaccount">
      <div className="Singupaccount-all">
        <h1 className="account-title">Sing Up</h1>
        <form className="singup-form">
          <span className="singup-span">First Name</span>
          <input className="singup-email" type="text" />
          <span className="singup-span">Last Name</span>
          <input className="singup-password" type="password"></input>
          <span className="singup-span">Email</span>
          <input className="singup-password" type="password"></input>
          <span className="singup-span">Password</span>
          <input className="singup-password" type="password"></input>
          <span className="singup-span">Confirm Password</span>
          <input className="singup-password" type="password"></input>
          <span className="singup-span">Brithday</span>
          <input className="birthday" type="date" id="birthday" name="birthday"></input>
          <button className="singup-btn">Sing Up</button>
          <div className="sing-up-forget-password">
            <p className="sing-up-text">
              <strong>Sing</strong> in
            </p>
            <p className="foget-password-text">Forget password</p>
          </div>
        </form>
      </div>
    </div>
  );
}
