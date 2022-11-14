import React from "react";

import styled from "styled-components";
import LotCreation from "../components/Userhomepage/LotCreation";
import Navbar from "../components/Userhomepage/Navbar";
import Sidebar from "../components/Userhomepage/Sidebar";
import { Link } from "react-router-dom";

const Container = styled.div`
display: flex;
`;
const Wraper = styled.div`
display: flex;
flex-direction: column;
`;
const CreateLot = styled.div`
margin-left: 100px;
margin-top: 100px;
width: 500px;
height: 230px;
background-color:#FCFCFC;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
font-family: "Roboto", sans-serif;
color: #F35588;
`
const CreateTitle = styled.h1`
padding: 30px 30px;
width: max-content;
padding-bottom: 5px;
`;
const CreateText = styled.p`
padding: 30px 40px;
width: max-content;
padding-top: 5xp;
`;
const CreateBtn = styled.button`
padding: 10px 40px;
width: max-content;
margin-left: 30px;
background-color:#F35588;
color: #fff;
font-size: 16px;
border: none;
border-radius: 5px;
`;


const Userhomepage = () => {
 
  return (
    <Container>
      <Sidebar />

      <Wraper>
        <CreateLot>
          <CreateTitle>Create your lot </CreateTitle>
          <CreateText>
            You can create for animation maker or content creator
          </CreateText>
          <Link to ="/Lot"><CreateBtn>Create our Lot</CreateBtn></Link>
        </CreateLot>
      </Wraper>
     
      <Navbar />
    </Container>
  );
};

export default Userhomepage;
