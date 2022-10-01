import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;
const Wraper = styled.div`
  display: flex;
  margin-left: 170px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Img = styled.img`
  justify-content: space-between;
  padding-right: 200px;
  width: 150px;
  height: 54px;
`;

const Navitems = styled.div`
  padding-right: 180px;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  color: #f35588;
  align-items: center;
`;
const Li = styled.li`
  padding-right: 40px;
`;
const About = styled.div`
  display: flex;
  padding-right: 30px;
`;

const NavItemLogin = styled.div`
  display: flex;
  margin-left: -50px;

`;
const Login = styled.h5`
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  color: #f35588;
  padding-right: 20px;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 148px;
  height: 45px;
  padding: 10px 30px;
  font-size: 20px;
  border: none;
  background-color: #aa3b75;
  color: #fff;
  margin-top: 10px;

`;

const Strong = styled.strong`
  font-weight: bold;
  font-size: 20px;
`;

const UserInfo = styled.div`display:flex;
align-items: center;`;
const UserInfoName = styled.p`
padding: 20px 10px;
width: max-content;
font-family: "Roboto", sans-serif;
  font-size: 17px;
  color: #f35588;
  cursor: pointer;
`;

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wraper>
        <Img src="./images/animlot-logo.png" />
        <Navitems>
          <Ul>
            <About>
              About
              <KeyboardArrowDownIcon />
            </About>

            <Li>Products</Li>
            <Li>
              <Strong>Watch</Strong>
            </Li>
            <Li>Features</Li>
          </Ul>
        </Navitems>
        <NavItemLogin>
          {currentUser ? (
            <UserInfo>
            
              <UserInfoName>{currentUser.displayname}</UserInfoName>
              <PersonIcon style={{padding :"20px 10px",color :" #f35588", paddingRight:"10px", fontSize:"27px"}}/>
            </UserInfo>
          ) : (
            <Login>
              Sign in
              <PersonIcon />
            </Login>
          )}
          <Button>Join</Button>
        </NavItemLogin>
      </Wraper>
    </Container>
  );
}
