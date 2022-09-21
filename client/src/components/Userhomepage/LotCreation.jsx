import React from "react";
import styled from "styled-components";

const LotCreation = () => {
  const Container = styled.div``;
  const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 100px;
width: 400px;
height: 300px;

  background-color:#FCFCFC;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
padding-left: 50px;
padding-top: 30px;

  font-family: "Roboto", sans-serif;
  `;
  const Title = styled.h1`

  width: max-content;
  `;

  const Display_name_span = styled.span`
    font-size: 16px;
    color: #a93b74;
    margin-bottom: 5px;
 
  `;

  const Display_name_input = styled.input`
    width: 300px;
    height: 30px;
    border: 1px solid #a93b74;
    font-size: 18px;
    border-radius: 3px;
    outline: none;
  `;
  const Type_of_creator = styled.span`
    font-size: 16px;
    color: #a93b74;
    margin-bottom: 5px;
    margin-top: 20px;
  `;
  const Select = styled.select`
  
  margin-bottom: 20px;
  width: max-content;
  padding:10px 70px;
  font-size: 20px;
  outline: none;
  border: 1px solid #a93b74;

  `;

  const Animation_maker = styled.option``;
  const Content_creator = styled.option``;

  const Create_btn = styled.button`
    padding: 10px 47px;
    font-size: 19px;
    border: none;
    background-color: #f35588;
    color: #fff;
    width: max-content;
  `;

  return (
    <Container>
      <Wraper>
        <Title>Lot creation</Title>
        <Display_name_span>Display Name</Display_name_span>
        <Display_name_input type="text" />
        <Type_of_creator>Type of user</Type_of_creator>
        <Select>
          <Animation_maker value="Animation Maker">
            Animation Maker
          </Animation_maker>
          <Content_creator value="Content Creator">
            Content Creator
          </Content_creator>
        </Select>
        <Create_btn>Create Lot</Create_btn>
      </Wraper>
    </Container>
  );
};

export default LotCreation;
