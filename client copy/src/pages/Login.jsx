import React from "react";
import styled from "styled-components";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Navbar from "../components/home/Navbar";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";



const Container = styled.div``;
const Wraper = styled.div``;
const Loginn = styled.div`
  width: 500px;
  height: 400px;
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

const Login_titles = styled.h1`
  margin-bottom: 20px;
  margin-left: 150px;
  color: #a93b74;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Span_email = styled.span`
  font-size: 16px;
  color: #a93b74;
  margin-bottom: 5px;
`;
const Email_Input = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #a93b74;
  padding-left: 20px;
  font-size: 18px;
  border-radius: 3px;
`;

const Span_PASSWORD = styled.span`
  font-size: 16px;
  margin-top: 10px;
  color: #a93b74;
  margin-bottom: 5px;
`;
const Password_Input = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #a93b74;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 3px;
`;

const Login_btns = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Login_btn = styled.button`
  padding: 10px 47px;
  font-size: 19px;
  border: none;
  margin-right: 20px;
  background-color: #f35588;
  color: #fff;
`;
const Login_Google_btn = styled.button`
  padding: 10px 47px;
  font-size: 19px;
  border: none;
  background-color: #f35588;
  color: #fff;
`;

const Signup = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #a93b74;
  font-size: 22px;
  font-weight: bold;
`;
const Forget_password = styled.p`
  color: #a93b74;
`;

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const dispatch = useDispatch();
  const navigate = useNavigate()
  

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { email, password });
      dispatch(loginSuccess(res.data));
      navigate("/");
      console.log(res);
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wraper>
        <Navbar />
        <Loginn>
          <Login_titles>Log in</Login_titles>
          <LoginForm >
            <Span_email>Email</Span_email>
            <Email_Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Span_PASSWORD>Password</Span_PASSWORD>
            <Password_Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Login_btns>
              <Login_btn type="submit" onClick={handleLogin}>Sign in </Login_btn>
              <Login_Google_btn>sign in with Google</Login_Google_btn>
            </Login_btns>
          </LoginForm>
          <Signup>Sign up</Signup>
          <Forget_password>Forget password</Forget_password>
        </Loginn>
      </Wraper>
    </Container>
  );
};

export default Login;
