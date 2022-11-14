import React from "react";
import styled from "styled-components";
import Featuredcard from "../components/home/Featuredcard";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Navbar from "../components/home/Navbar";

const Watch = () => {
  const Container = styled.div``;
  const Wraper = styled.div``;
  const Fcards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  margin-left: 30px;
  background-color: #fcfcfc;
  margin-top: 60px;
`;
const LoadMore = styled.button`
margin-top: 50px;
margin-left: 45%;
font-size: 20px;
padding:10px 45px;
margin-bottom:100px;
background-color: #AA3B75;
color:#fff;
border: none;
cursor: pointer;
`
  return (
    <Container>
      <Wraper>
        <Navbar />
        <Header />
        <Fcards>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
            <Featuredcard/>
        </Fcards>
        <LoadMore>Load more</LoadMore>
        <Footer/>
      </Wraper>
    </Container>
  );
};

export default Watch;
