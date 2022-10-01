import React from "react";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useRef } from "react";
import Signup from "./Signup";
const Container = styled.div``;

const Siginfun = () => {
  const [display, setdisplay] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputs, setinputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/singup/", {
        display,

        email,

        password,
        confirmPassword,
      });
      res.data && window.location.replace("/");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Signup
        display={display}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Siginfun;
