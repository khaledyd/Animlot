import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
const Sidebar = () => {
  const Container = styled.div``;
  const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100vh;
    background-color:#F35588;
  `;
  const Username = styled.div`
  padding:80px 30px;
  font-family: "Roboto", sans-serif;
  color: #fff;
display: flex;
align-items: center;
  `;
  const Usernametext = styled.p`
  margin-left: 5px;
  
  font-size: 15px;
  `;
  const Navbarlist = styled.ul`
    padding:0px 30px;
    list-style: none;
    font-size: 18px;
    color: #fff;
    font-family: "Roboto", sans-serif;
  `;
  const Navbarlistitems = styled.li`
  padding:5px 5px;
  `;
  const NavbarBtn = styled.button`
  padding:10px 30px;
  width: max-content;
margin-left: 30px;
margin-top: 300px;
background-color:#fff;
color: #F35588;
border: none;
font-size: 20px;
  `;
  return (
    <Container>
      <Wraper>
        <Username>
          <PersonIcon />
          <Usernametext> khalid dahir</Usernametext>
        </Username>
        <Navbarlist>
          <Navbarlistitems>Account settings</Navbarlistitems>
          <Navbarlistitems>Lot settings</Navbarlistitems>
          <Navbarlistitems>Payments</Navbarlistitems>
          <Navbarlistitems>Resources</Navbarlistitems>
          <Navbarlistitems>Contact</Navbarlistitems>
        </Navbarlist>
        <NavbarBtn>Create Lot</NavbarBtn>
      </Wraper>
    </Container>
  );
};

export default Sidebar;
