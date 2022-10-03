import React from "react";
import styled from "styled-components";
import Featured from "../components/home/Featured";
import Featuredcard from "../components/home/Featuredcard";
import Header from "../components/home/Header";
import Navbar from "../components/home/Navbar";
import QuestionCart from "../components/home/QuestionCard";
import Sponsored from "../components/home/Sponsored";
import SponsoredCards from "../components/home/SponsoredCards";
import TwoQuestionsTitles from "../components/home/TwoQuestionsTitles";
import QuestionCard from "../components/home/QuestionCard";
import Headertwo from "../components/home/Headertwo";
import Foryou from "../components/home/Foryou";
import Footer from "../components/home/Footer";
import { useSelector } from "react-redux";


const Container = styled.div``;
const SCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  margin-left: 30px;
  background-color: #fcfcfc;
  margin-top: 60px;
`;
const Fcards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  margin-left: 30px;
  background-color: #fcfcfc;
  margin-top: 60px;
`;
const QCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fcfcfc;
`;
const Hcard = styled.div``;
const Foyoucard = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding-bottom: 40px;
  margin-left: 30px;
  background-color: #fcfcfc;
  margin-top: 60px;
`;

const Foryoutitle = styled.h2`
  margin-bottom: -70px;
  margin-left: 110px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  margin-top: 30px;
`;

const Hr = styled.hr`
color: #707070;
margin-left: 100px;
margin-top: 50px;
margin-right: 30px;
border: solid 0.1px  #707070;
`

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);


  return (
    <Container>
      <Navbar />
      <Header />
      <Sponsored img = 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      <SCards>
        <SponsoredCards
          img ="https://images.pexels.com/photos/2789545/pexels-photo-2789545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      
        />
        <SponsoredCards
          img="https://images.pexels.com/photos/1557183/pexels-photo-1557183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          
        />
        <SponsoredCards img = "https://images.pexels.com/photos/12498608/pexels-photo-12498608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <SponsoredCards img = "https://images.pexels.com/photos/3741315/pexels-photo-3741315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <SponsoredCards />
      </SCards>
<Hr/>
      <Featured img = "https://images.pexels.com/photos/8082205/pexels-photo-8082205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Fcards>
        <Featuredcard img = "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Featuredcard img = 'https://images.pexels.com/photos/1181288/pexels-photo-1181288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <Featuredcard img = "https://images.pexels.com/photos/8082205/pexels-photo-8082205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   />
        <Featuredcard  img = "https://images.pexels.com/photos/12498608/pexels-photo-12498608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Featuredcard  img ="https://images.pexels.com/photos/2789545/pexels-photo-2789545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Featuredcard   img ="https://images.pexels.com/photos/2789545/pexels-photo-2789545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Featuredcard  img="https://images.pexels.com/photos/1557183/pexels-photo-1557183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Featuredcard img = "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Featuredcard  img ="https://images.pexels.com/photos/2789545/pexels-photo-2789545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Featuredcard img="https://images.pexels.com/photos/1557183/pexels-photo-1557183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </Fcards>
      <Hr/>
      <TwoQuestionsTitles />
      <QCard>
        <QuestionCard img ='https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <QuestionCard img ='https://images.pexels.com/photos/269252/pexels-photo-269252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      </QCard>
      <Hr/>
      <Hcard>
        <Headertwo />
      </Hcard>
      <Hr/>
      <Foryoutitle>lots For you </Foryoutitle>
      <Foyoucard>
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
        <Foryou />
      </Foyoucard>
      <Hr/>
      <Footer />
    </Container>
  );
}
