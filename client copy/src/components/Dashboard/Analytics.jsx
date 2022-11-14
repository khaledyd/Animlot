import React from "react";
import styled from "styled-components";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Analytics = () => {
  const Conrainer = styled.div``;
  const Wraper = styled.div`display:flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 50px;
  font-family: "Roboto", sans-serif;
  `;
  const Title = styled.h1`font-size:50px;`;
  const Subtitle = styled.div`
  padding: 10px 50px;
  width: max-content;
  background-color:#F35588;
  color: #fff;
  margin-top: 20px;
  `;
  const Cards = styled.div`display:flex;
  margin-top: 30px;
  `;
  const Views = styled.div`
  padding: 40px 60px;
  background-color:red;
  background-color:#F35588;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  border-radius: 5px;
  ;
  `;
  const ViewsTitle = styled.h1`
  font-size: 40px;
  color: #fff;
  `;
  const Viewsdata = styled.div`
  
  display: flex;
align-items: center;
padding: 10px 30px;
background-color:white;
margin-top: 20px;
background-color:white;
color: #2F2032;

  `;
  const Viewstext = styled.h2``;
  const Followers = styled.div`
   padding: 40px 60px;
  background-color:red;
  background-color:#F35588;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  border-radius: 5px;
  margin-left: 50px;
  `;
  const Followerstitle = styled.h1`  font-size: 40px;
  color: #fff;`;
  const Followersdata = styled.div`  display: flex;
  align-items: center;
  padding: 10px 30px;
  background-color:white;
  margin-top: 20px;
  background-color:white;
  color: #2F2032;`;
  const Followerstext = styled.h2``;

  return (
    <Conrainer>
      <Wraper>
        <Title>Anlytics</Title>
        <Subtitle>Last three days</Subtitle>
        <Cards>
          <Views>
            <ViewsTitle>Views</ViewsTitle>
            <Viewsdata>
      
              <Viewstext>30,200 Views</Viewstext>
              <ArrowDropDownIcon style={{color:"red", fontSize:"40px"}} />
            </Viewsdata>
          </Views>
          <Followers>
            <Followerstitle>Followers</Followerstitle>
            <Followersdata>
       
              <Followerstext>12,30 Followers</Followerstext>
              <ArrowDropUpIcon style={{color:"green", fontSize:"40px"}} />
            </Followersdata>
          </Followers>
        </Cards>
      </Wraper>
    </Conrainer>
  );
};

export default Analytics;
