import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
        
        display:flex;
       
        `;
    const Wraper = styled.div`
margin-left: 60vh;
display: flex;
margin-top: 30px;
    `;
    const Followings    = styled.div`
    
    margin-right: 20px;
    color:#2F2032;
    font-family: "Roboto", sans-serif;
    `;
  
    const  Followingstext = styled.p`
    font-size: 16px;`;
    const FollowingNumber   = styled.p`
    font-size: 14px;
    padding-left: 20px;
    color:#F35588;
    `;



    const Navimg = styled.img`
    width: 30px;
    height: 30px;

    border-radius: 50%;

    background-color: black;
  `;

const Navbar = () => {
    const { currentLot } = useSelector((state) => state.lot);
    
    
    return (
        <Container>
            <Wraper>
                <Followings>
                    <Followingstext>Followings</Followingstext>
                    <FollowingNumber>100</FollowingNumber>
                </Followings>
                <Navimg  src="./images/pexels-alex-umbelino-13429899.jpg" />
            </Wraper>
        </Container>
    );
}

export default Navbar;
