import React from "react";
import styled from "styled-components";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

const Signup = () => {
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
  const Signup_form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const Siginup_title = styled.h1`
    margin-bottom: 20px;
    margin-left: 150px;
    color: #a93b74;
  `;

  const Display_name_span = styled.span`
    font-size: 16px;
    color: #a93b74;
    margin-bottom: 5px;
  `;

  const Display_name_input = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid #a93b74;
    padding-left: 20px;
    font-size: 18px;
    border-radius: 3px;
    outline: none;
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
    outline: none;
  `;

  const Span_password = styled.span`
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
    outline: none;
  `;

  const Span_confirm_password = styled.span`
    font-size: 16px;
    margin-top: 10px;
    color: #a93b74;
    margin-bottom: 5px;
  `;
  const Confirm_Password_Input = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid #a93b74;
    font-size: 18px;
    padding-left: 20px;
    border-radius: 3px;
    outline: none;
    
  `;

  const Signup_btns = styled.div`
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

  const Sigin = styled.p`
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
        <Siginup>
          <Siginup_title>Sign up</Siginup_title>
          <Signup_form>
            <Display_name_span>Display name</Display_name_span>
            <Display_name_input type="text" />
            <Span_email>Email</Span_email>
            <Email_Input type="email" />
            <Span_password>Password</Span_password>
            <Password_Input type="password" />
            <Span_confirm_password>confirm Password</Span_confirm_password>
            <Confirm_Password_Input type="password" />
            <Signup_btns>
              <Login_btn>Sign Up </Login_btn>
            </Signup_btns>
          </Signup_form>
          <Sigin>Sig In</Sigin>
          <Forget_password>Forget Password</Forget_password>
        </Siginup>
  
      </Wraper>
    </Container>
  );
};

export default Signup;
