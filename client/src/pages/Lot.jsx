import React from "react";
import styled from "styled-components";
import LotCreation from "../components/Userhomepage/LotCreation";
import Navbar from "../components/Userhomepage/Navbar";
import Sidebar from "../components/Userhomepage/Sidebar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { lotStart, lotSuccess, lotFailure } from "../Redux/lotSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 100px;
  width: 400px;
  height: 300px;

  background-color: #fcfcfc;
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
  padding: 10px 70px;
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

const Lot = () => {
  const [displayname, setDisplayname] = useState("");
  const [Typeoflot, setTypeoflot] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { currentLot } = useSelector((state) => state.lot);

  const hanldesubmit = async (e) => {
    e.preventDefault();
    dispatch(lotStart());
    try {
      const res = await axios.put("/auth/lots", {
        displayname,
        Typeoflot,
      });
      dispatch(lotSuccess(res.data));
      navigate("/dashboard");
      console.log(res);
    } catch (err) {
        dispatch(lotFailure())
    }
  };




 


  return (
    <Container>
      <Sidebar />
      <Wraper>
        <Title>Lot creation</Title>
        <Display_name_span>Display Name</Display_name_span>
        <Display_name_input
          type="text"
          onChange={(e) => setDisplayname(e.target.value)}
        />
        <Type_of_creator>Type of user</Type_of_creator>
        <Select onChange={(e) => setTypeoflot(e.target.value)}>
          <Animation_maker value="Animation Maker">
            Animation Maker
          </Animation_maker>
          <Content_creator value="Content Creator">
            Content Creator
          </Content_creator>
        </Select>
        <Link to ="/dashboard"><Create_btn onClick={handleSubmit}>Create Lot</Create_btn></Link>
      </Wraper>
    </Container>
  );
};

export default Lot;
