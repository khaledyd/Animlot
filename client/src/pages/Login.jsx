import React from "react";
import styled from "styled-components";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Navbar from "../components/home/Navbar";

const Login = () => {
  const Container = styled.div``;
  const Wraper = styled.div``;
  const Login = styled.div`
    width: 500px;
    height: 400px;
margin-left: 400px;
padding-left:100px;
padding-top: 30px;
margin-top: 100px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    background-color: #FCFCFC;
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

  return (
    <Container>
      <Wraper>
        <Navbar />
        <Login>
          <Login_titles>Log in</Login_titles>
          <LoginForm>
            <Span_email>Email</Span_email>
            <Email_Input type="text" />
            <Span_PASSWORD>Password</Span_PASSWORD>
            <Password_Input type="password" />
            <Login_btns>
              <Login_btn>Sign in </Login_btn>
              <Login_Google_btn>sign in with Google</Login_Google_btn>
            </Login_btns>
          </LoginForm>
          <Signup>Sign up</Signup>
          <Forget_password>Forget password</Forget_password>
        </Login>
    
      </Wraper>
    </Container>
  );
};

export default Login;
