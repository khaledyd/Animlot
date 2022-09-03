import React from "react";
import "./singingaccount.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import  {Context}  from "../../../../context/Context";

export default function SingingAccount() {
  const emaildRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handlesignin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/singin", {
        email: emaildRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/userhomepage");
      console.log(res);
    } catch (err) {}
  };
  return (
    <div className="SingingAccount">
      <div className="singingaccount-all">
        <h1 className="account-title">Account</h1>
        <form className="singing-form" onSubmit={handlesignin}>
          <span className="singng-span">email</span>
          <input
            className="singing-email
           "
            type="email"
            ref={emaildRef}
          />
          <span className="singng-span">Password</span>
          <input
            className="singing-password"
            type="password"
            ref={passwordRef}
          ></input>{" "}
          <button type="submit" className="singing-btn">
            Sing in
          </button>
          <div className="sing-up-forget-password">
            <Link className="link" to={"/Singup"}>
              <p className="sing-up-text">
                <strong>Sing</strong> up
              </p>
            </Link>
            <p className="foget-password-text">Forget password</p>
          </div>
        </form>
      </div>
    </div>
  );
}
