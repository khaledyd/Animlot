import React from "react";
import styled from "styled-components";

export default function Headertwo({img}) {
  const Container = styled.div`


  `;
  const Wraper = styled.div`
    display: flex;
    margin-top: 40px;
    margin-bottom: 30px;
    





  `;


  const Card = styled.div`
    disply: flex;
background-color:#F35588;
padding: 20px;
margin-left: 100px;
margin-top: 50px;

  `;
  const Cimg = styled.img`
    width: 1270px;
    height: 650px;
    background-color: black;

    display: flex;
  `;
  const CartInfo = styled.div`
    width: 1270px;
    height: 80px;
    display: flex;

    margin-top: 6px;
    border-radius: 5px;
border: none;
background-color:#fff;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  `;
  const LotName = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
margin-bottom: 30px;
  `;

  const LotPhoto = styled.img`
    width: 60px;
    height: 60px;
margin: 10px 20px;
margin-bottom: 20px;
    border-radius: 50%;

    background-color: black;
  `;
  const Lotsubinfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  `;
  const LotTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: bold;
    margin-left: -120px;
    margin-top: 35px;

  `;
  const LotTime = styled.div`
    width: max-content;

    background-color: #f35588;
    color: white;
    font-size: 15px;
    padding: 2px 5px ;
margin-bottom: 30px;
margin-left: 7px;
  `;
  const LotViews = styled.p`
    margin-left: -285px;
    font-size: 14px;
    margin-top: 60px;
    font-family: "Roboto", sans-serif;
  `;
  const Vstrong = styled.strong`
    color: #f35588;
  `;
  return (
    <Container>
      <Wraper>
       

        <Card>
          <Cimg src='./images/himg.jpg'/>
          <CartInfo>
            <LotPhoto src="./images/pexels-alex-umbelino-13429899.jpg"></LotPhoto>
            <Lotsubinfo>
              <LotName>ice love</LotName>
              <LotTime>10:10</LotTime>
            </Lotsubinfo>
            <LotTitle>What is block gain and thing?</LotTitle>
            <LotViews>
              222,200 <Vstrong>views</Vstrong>
            </LotViews>
          </CartInfo>
        </Card>
      </Wraper>
    </Container>
  );
}
