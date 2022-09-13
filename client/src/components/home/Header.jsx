import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const Container = styled.div``;
  const Wraper = styled.div`
    width: 100%;
    margin-top: 30px;
    height: 400px;
    background-color: #f35588;
  `;
  const HeaderTitile = styled.h1`
    padding-left: 350px;
    padding-top: 50px;
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 30px;
    letter-spacing: 2.5px;
  `;
  const Search = styled.div`
    margin-top: 40px;
    margin-left: 400px;
    width: 600px;
    height: 50px;
    align-items: center;

    background-color: #fff;
  `;
  const Select = styled.select`
    height: 50px;
    width: 150px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    background-color: #aa3b75;
    color: #fff;
    outline: none;
  `;
  const Input = styled.input`
    height: 40px;
    border: none;
    outline: none;
    width: 400px;
    font-size: 30px;
    padding-left: 10px;
  `;

  const HeaderSubText = styled.h4`
    margin-left: 430px;
    margin-top: 30px;
    color: #fff;
    font-size: 20px;
    font-family: "Roboto", sans-serif;

  `;
  const Paeagraph = styled.p`
    margin-left: 630px;
    margin-top: 10px;
    color: #fff;
    font-size: 15px;
    font-family: "Roboto", sans-serif;

  `;
  const Strong = styled.strong`
    font-weight: bold;
    font-size: 40px;
  `;
  const StrongOne = styled.strong`
    font-weight: bold;
    font-size: 25px;
  `;

  return (
    <Container>
      <Wraper>
        <HeaderTitile>
          Your desired <Strong>answer</Strong> with the{" "}
          <Strong>animation</Strong>
        </HeaderTitile>
        <Search>
          <Select>
            <option value="volvo">how it works ?</option>
            <option value="saab">what is ?</option>
          </Select>
          <Input type="text" />

          <SearchIcon style={{ color: "#aa3b75", fontSize: "30px" }} />
        </Search>
        <HeaderSubText>
          Just <StrongOne>add</StrongOne> the <StrongOne>keyword</StrongOne> and
          choose the <StrongOne>question type </StrongOne>{" "}
        </HeaderSubText>
        <Paeagraph>Then we got you</Paeagraph>
      </Wraper>
    </Container>
  );
}
