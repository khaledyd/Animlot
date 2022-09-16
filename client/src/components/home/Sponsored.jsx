import React from "react";
import styled from "styled-components";

export default function Sponsored({img}) {
  const Container = styled.div``;
  const Wraper = styled.div`
    margin-left: 100px;
    display: flex;
  `;
  const Simg = styled.img`
    width: 800px;
    height: 400px;
    margin-top: 30px;
    background-color: black;
    border-radius: 20px;
  `;
  const Stitle = styled.h1`
    color: #f35588;
    font-family: "Roboto", sans-serif;
    margin-top: 30px;
    margin-left: 30px;
  `;
  const Card = styled.div`
    disply: flex;
  `;
  const Cimg = styled.img`
    width: 400px;
    height: 220px;
    background-color: black;
 margin-top: 10px;
    margin-left: 30px;
    display: flex;
  `;
  const CartInfo = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    margin-left: 30px;
    margin-top: 6px;
    border-radius: 5px;
 border: none;
 box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  `;
  const LotName = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    margin-bottom: 10px;
  `;

  const LotPhoto = styled.img`
    width: 43px;
    height: 41px;

    margin: 5px 20px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-color: black;
  `;
  const Lotsubinfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `;
  const LotTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: bold;
    margin-left: -83px;
    margin-top: 23px;
  `;
  const LotTime = styled.div`
    width: max-content;

    background-color: #f35588;
    color: white;
    font-size: 8px;
    padding: 3px 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  `;
  const LotViews = styled.p`
    margin-left: -156px;
    margin-top: 37px;
    font-size: 10px;
  `;
  const Vstrong = styled.strong`
    color: #f35588;
  `;

  return (
    <Container>
      <Wraper>
        <Simg src="./images/spimg.jpg"></Simg>

        <Card>
          <Stitle>Sponsosred</Stitle>
          <Cimg src={img} />
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
