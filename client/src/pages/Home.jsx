import React from "react";
import Featured from "../components/home/Fetured";
import Hero from "../components/home/Hero";
import Nav from "../components/home/Nav";
import Question from "../components/home/Question";
import Sponsored from "../components/home/Sponsored";
import BganimlotCard from "../components/home/BganimlotCard";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Sponsored />
      <Featured />
      <Question />
      <BganimlotCard />
    </div>
  );
};

export default Home;
