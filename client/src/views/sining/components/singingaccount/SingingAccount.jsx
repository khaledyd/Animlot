import React from "react";
import "./singingaccount.css";
import { Link } from "react-router-dom";


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
          <Link className="link" to={"/Userhomepage"}>  <button className="singing-btn">Sing in</button></Link>
        
          <div className="sing-up-forget-password">
          <Link className="link" to={"/Singup"}><p className="sing-up-text"><strong>Sing</strong> up</p></Link>
            <p className="foget-password-text">Forget password</p>
          </div>
        </form>
      </div>
    </div>
  );
}
