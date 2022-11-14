import React from "react";
import styled from "styled-components";

export default function Sponsored({img}) {
  const Container = styled.div`
margin-right: -65px;

margin-bottom:-60px;

  `;
  const Wraper = styled.div`
    margin-left: 50px;
    display: flex;
    margin-top: 40px;
    margin-bottom: 30px;



  `;


  const Card = styled.div`
    disply: flex;

  `;
  const Cimg = styled.img`
    width: 250px;
    height: 150px;
    background-color: black;
 margin-top: 10px;
    margin-left: 30px;
    display: flex;
  `;
  const CartInfo = styled.div`
    width: 250px;
    height: 40px;
    display: flex;
    margin-left: 30px;
    margin-top: 6px;
    border-radius: 5px;
border: none;
background-color:#fff;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  `;
  const LotName = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    margin-bottom: 5px; 
  `;

  const LotPhoto = styled.img`
    width: 30px;
    height: 30px;
margin: 5px 10px;
margin-bottom: 10px;
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
    font-size: 10px;
    font-weight: bold;
    margin-left: -63px;
    margin-top: 19px;

  `;
  const LotTime = styled.div`
    width: max-content;

    background-color: #f35588;
    color: white;
    font-size: 5px;
    padding: 2px 5px ;
margin-bottom: 8px;
margin-left: 7px;
  `;
  const LotViews = styled.p`
    margin-left: -130px;
    font-size: 6px;
    margin-top: 30px;
    font-family: "Roboto", sans-serif;
  `;
  const Vstrong = styled.strong`
    color: #f35588;
  `;
  return (
    <Container>
      <Wraper>
       

        <Card>
          <Cimg src={img}/>
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
