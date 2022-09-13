import React from "react";
import "./login.css";
import { useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data);
      res.data && window.location.replace("/dashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="logo">
        <img src="./images/Dhaqaal.png" alt="" className="logo-img" />
      </div>
      <div className="login-allform">
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="span">username</span>
          <input
            type="text"
            className="username"
            placeholder="Username"
            ref={userRef}
          />
          <span className="span">password</span>
          <input
            type="password"
            className="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <input
            type="submit"
            className="btn btn-primary"
            placeholder="Login"
          />
         
        
          <Link to="/singup">
            <span className="singup-login">Sing up</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
