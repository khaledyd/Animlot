import React from "react";
import styled from "styled-components";
export default function TwoQuestionsTitles() {
  const Container = styled.div`
    display: flex;
  `;
  const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 100px;


  `;
  const Title = styled.h1`
  color: #AA3B75;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: normal;
  `;
  const Qtype = styled.div`
display: flex;
margin-top: 30px;
`;
  const What = styled.div`
    font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #AA3B75;
  width: 300px;
  height: 30px;
  padding: 10px 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  margin-left: 0px;
  `;
  const How = styled.div`
margin-left: 340px;
font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #AA3B75;
  width: 300px;
  height: 30px;
  padding: 10px 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  `;

const StrongOne = styled.strong`
font-weight: bold;
font-size: 31px;



`;
  return (
    <Container>
      <Wraper>
        <Title>The two <StrongOne>questions</StrongOne> <StrongOne>animlot</StrongOne> is built for </Title>
        <Qtype>
          <What>What is ?</What>
          <How>how it works ?</How>
        </Qtype>
      </Wraper>
    </Container>
  );
}
