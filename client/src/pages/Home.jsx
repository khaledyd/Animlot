import React from "react";
import Featured from "../components/home/Fetured";
import Hero from "../components/home/Hero";
import Nav from "../components/home/Nav";
import Question from "../components/home/Question";
import Sponsored from "../components/home/Sponsored";
import BganimlotCard from "../components/home/BganimlotCard";
import Footer from "../components/home/Footer";
import { Box } from "@mui/system";
const Home = () => {
  return (
    <Box sx={{
  padding:"0px",
  MARGIN:"0px",

    }}>
      <Nav />
      <Hero />
      <Sponsored />
      <Featured />
      <Question />
      <BganimlotCard />
      <Footer />
    </Box>
  );
};

export default Home;
