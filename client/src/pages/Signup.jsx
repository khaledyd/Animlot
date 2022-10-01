import React from "react";
import styled from "styled-components";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import axios from "axios";
import { useState, useRef } from "react";



  const Container = styled.div``;
  const Wraper = styled.div``;
  const Nav = styled.div``;

  const Siginup = styled.div`
    width: 500px;
    height: 500px;
    margin-left: 400px;
    padding-left: 100px;
    padding-top: 30px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    background-color: #fcfcfc;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 5px;
  `;
  const Signupform = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const Siginuptitle = styled.h1`
    margin-bottom: 20px;
    margin-left: 150px;
    color: #a93b74;
  `;

  const Displaynamepan = styled.span`
    font-size: 16px;
    color: #a93b74;
    margin-bottom: 5px;
  `;

  const Displaynamenput = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid #a93b74;
    padding-left: 20px;
    font-size: 18px;
    border-radius: 3px;
    outline: none;
  `;

  const Spanemail = styled.span`
    font-size: 16px;
    color: #a93b74;
    margin-bottom: 5px;
  `;
  const EmailInput = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid #a93b74;
    padding-left: 20px;
    font-size: 18px;
    border-radius: 3px;
    outline: none;
  `;

  const Spanpassword = styled.span`
    font-size: 16px;
    margin-top: 10px;
    color: #a93b74;
    margin-bottom: 5px;
  `;
  const PasswordInput = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid #a93b74;
    font-size: 18px;
    padding-left: 20px;
    border-radius: 3px;
    outline: none;
  `;

  const Spanconfirmpassword = styled.span`
    font-size: 16px;
    margin-top: 10px;
    color: #a93b74;
    margin-bottom: 5px;
  `;
  const ConfirmPasswordInput = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid #a93b74;
    font-size: 18px;
    padding-left: 20px;
    border-radius: 3px;
    outline: none;
  `;

  const Signupbtns = styled.div`
    display: flex;
    margin-top: 20px;
  `;

  const Loginbtn = styled.button`
    padding: 10px 47px;
    font-size: 19px;
    border: none;
    margin-right: 20px;
    background-color: #f35588;
    color: #fff;
    cursor: pointer;
  `;
  const Login_Google_btn = styled.button`
    padding: 10px 47px;
    font-size: 19px;
    border: none;
    background-color: #f35588;
    color: #fff;
  `;

  const Sigin = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #a93b74;
    font-size: 22px;
    font-weight: bold;
  `;
  const Forgetpassword = styled.p`
    color: #a93b74;
  `;
  const Errormassage = styled.p`
  margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: red;
    font-size: 18px;
    font-weight: bold;
  `




const Signup = () => {
  const [displayname, setdisplay] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", {
        displayname,
        email,
        password,
        confirmPassword,
      });
      res.data && window.location.replace("/login");
      console.log(res);
    } catch (err) {
      setError(true)
      console.log(err);
    }
  };


  return (
    <Container>
      <Wraper>
        <Navbar />
        <Siginup>
          <Siginuptitle>Sign up</Siginuptitle>
          <Signupform onSubmit={handleSubmit}>
            <Displaynamepan>Display name</Displaynamepan>
            <Displaynamenput type="text" onChange={(e)=> setdisplay(e.target.value)} />
            <Spanemail>Email</Spanemail>
            <EmailInput type="email" onChange={(e)=> setemail(e.target.value)}/>
            <Spanpassword>Password</Spanpassword>
            <PasswordInput type="password" n  onChange={(e)=> setpassword(e.target.value)}/>
            <Spanconfirmpassword>confirm Password</Spanconfirmpassword>
            <ConfirmPasswordInput type="password" onChange={(e)=>setConfirmPassword(e.target.value)} />
            <Signupbtns>
              <Loginbtn type="submit" >Sign Up </Loginbtn>
            </Signupbtns>
            {error && <Errormassage>password  and confrim Password must be same </Errormassage>}
          </Signupform>
          <Sigin>Sig In</Sigin>

          <Forgetpassword>Forget Password</Forgetpassword>
        </Siginup>
      </Wraper>
    </Container>
  );
};

export default Signup;
