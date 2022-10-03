import React from "react";
import styled from "styled-components";

const LotCreation = () => {
 

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
