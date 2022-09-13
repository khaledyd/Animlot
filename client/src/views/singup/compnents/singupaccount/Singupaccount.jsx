import React from "react";
import "./singupaccount.css";
import { Link } from "react-router-dom";
import {useState, useEffect } from "react"
import axios from "axios";
import { auth, provider } from "../../../.././firebase";
import { signInWithPopup } from "firebase/auth";

export default function Singupaccount() {
  const [firstname,setFirtname] = useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

   const handleSingupAccountSubmit = async (e)=> { 
    e.preventDefault()
    const res = await axios.post("/auth/singup",{
      firstname,
      lastname,
      email,
      password,
    });
    res.data && window.location.replace("/Userhomepage");
    console.log(res)
   
   
  } 


  return (
    <div className="Singupaccount">
      <div className="Singupaccount-all">
        <h1 className="account-title">Sing Up</h1>
        <form className="singup-form" onSubmit={handleSingupAccountSubmit}>
          <span className="singup-span">First Name</span>
          <input className="singup-email"
           type="text"
           placeholder="First Name"
           onChange={e => setFirtname(e.target.value)}
           />
          <span className="singup-span">Last Name</span>
          <input className="singup-password"
           type="text"
           placeholder="Last Name"
           onChange={e => setLastname(e.target.value)}
           
           ></input>
          <span className="singup-span">Email</span>
          <input className="singup-password"
           type="email"
           placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
           />
          <span className="singup-span">Password</span>
          <input className="singup-password" type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}/>
          {/*<span className="singup-span">Confirm Password</span>
          <input className="singup-password" type="password"
            placeholder="Confirm Password"
            onChange={e => setConfirmPassword(e.target.value)}
          /> */}
          
          {/*<span className="singup-span">Brithday</span>
          <input
            className="birthday"
            type="date"
            id="birthday"
            name="birthday"
            placeholder="Birthday"
            onChange={e=>setBirthday(e.target.value)}
          ></input> */}
          
          {/* <Link className="link" to={"/Userhomepage"}>
            {" "}     </Link> */}
            <input className="singup-btn"
            type="submit"/>
      

          <div className="sing-up-forget-password">
            <Link className="link" to={"/Singing"}>
              {" "}
              <p className="sing-up-text">
                <strong>Sing</strong> in
              </p>
            </Link>

            <button className="foget-password-text">sing up with google</button>
          </div>
        </form>
      </div>
    </div>
  );
}
