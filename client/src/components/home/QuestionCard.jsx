import React from "react";
import styled from "styled-components";

export default function QuestionCart({img}) {
  const Container = styled.div`

margin-bottom:-60px;

  `;
  const Wraper = styled.div`
    margin-left: 70px;
    display: flex;
    margin-top: 40px;
    margin-bottom: 70px;



  `;


  const Card = styled.div`
    disply: flex;

  `;
  const Cimg = styled.img`
    width: 600px;
    height: 300px;
    background-color: black;
 margin-top: 10px;
    margin-left: 30px;
    display: flex;
  `;
  const CartInfo = styled.div`
    width: 600px;
    height: 80px;
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
    font-size: 16px;
margin-bottom: 30px;
  `;

  const LotPhoto = styled.img`
    width: 60px;
    height: 60px;
margin: 10px 20px;
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
    font-size: 20px;
    font-weight: bold;
    margin-left: -113px;
    margin-top: 35px;

  `;
  const LotTime = styled.div`
    width: max-content;

    background-color: #f35588;
    color: white;
    font-size: 11px;
    padding: 6px 12px ;
margin-bottom: 30px;
margin-left: 7px;
  `;
  const LotViews = styled.p`
    margin-left: -257px;
    font-size: 10px;
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
