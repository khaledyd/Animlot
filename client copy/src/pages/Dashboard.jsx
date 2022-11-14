import React from "react";
import styled from "styled-components";
import Analytics from "../components/Dashboard/Analytics";
import Dashboardnav from "../components/Dashboard/Dashboardnav";
import Sidebar from "../components/Userhomepage/Sidebar";

const Dashboard = () => {
  const Container = styled.div`
    display: flex;
  `;
  const Wraper = styled.div``;

  const Hr = styled.hr`
    color: #707070;
   margin-right: -70px;
    margin-top: 50px;

    border: solid 0.1px #707070;
  `;

  return (
    <Container>
      <Sidebar />
      <Wraper>
        <Dashboardnav />
        <Hr />
        <Analytics/>
  
      </Wraper>
    </Container>
  );
};

export default Dashboard;
