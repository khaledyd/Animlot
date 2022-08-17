import React from "react";
import "./singingaccount.css";

export default function SingingAccount() {
  return (
    <div className="SingingAccount">
      <div className="singingaccount-all">
        <h1 className="account-title">Account</h1>
        <form className="singing-form">
          <span className="singng-span">Email</span>
          <input className="singing-email" type="text" />
          <span className="singng-span">Password</span>
          <input className="singing-password" type="password"></input>
          <button className="singing-btn">Sing in</button>
          <div className="sing-up-forget-password">
            <p className="sing-up-text"><strong>Sing</strong> up</p>
            <p className="foget-password-text">Forget password</p>
          </div>
        </form>
      </div>
    </div>
  );
}
