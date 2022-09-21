import React from "react";
import styled from "styled-components";

const Dashboardnav = () => {
  const Container = styled.div``;
  const Wrapper = styled.div`
    display: flex;
    margin-left: 50vh;
    margin-top: 30px;
    align-items: center;
    font-family: "Roboto", sans-serif;
  `;
  const FolClwoings = styled.div`
    margin-right: 100px;
    font-size: 20px;
  `;
  const Numberofflowings = styled.p`
    font-size: 16px;
    padding-left: 30px;
    color: #f35588;
  `;
  const Followers = styled.div`
    margin-right: 100px;
    font-size: 20px;
  `;
  const Numberoffolllowers = styled.p`
    padding-left: 10px;
    font-size: 16px;
    color: #f35588;
  `;
  const Veiws = styled.div`
    margin-right: 100px;
    font-size: 20px;
  `;
  const Numberofveiws = styled.p`
    padding-left: 10px;
    font-size: 16px;
    color: #f35588;
  `;
  const Userimg = styled.img`
     width: 50px;
    height: 50px;

    border-radius: 50%;

    background-color: black;
    margin-right: 10px;
  `;
  const Uploadbtn = styled.button`
    padding: 10px 30px;
    font-size: 16px;
background-color:#AA3B75;
color: #fff;
border: none;
 
  `;

  return (
    <Container>
      <Wrapper>
        <FolClwoings>
          Followeings
          <Numberofflowings>100</Numberofflowings>
        </FolClwoings>
        <Followers>
          Followers
          <Numberoffolllowers>1000</Numberoffolllowers>
        </Followers>
        <Veiws>
          Veiws
          <Numberofveiws>100</Numberofveiws>
        </Veiws>
        <Userimg src="./images/pexels-alex-umbelino-13429899.jpg" />
       
        <Uploadbtn>Upload content</Uploadbtn>
       
      </Wrapper>
    </Container>
  );
};

export default Dashboardnav;
