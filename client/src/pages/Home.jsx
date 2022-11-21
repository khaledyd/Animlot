import React from "react";
import Featured from "../components/home/Fetured";
import Hero from "../components/home/Hero";
import Nav from "../components/home/Nav";
import Question from "../components/home/Question";
import Sponsored from "../components/home/Sponsored";
import BganimlotCard from "../components/home/BganimlotCard";
import Footer from "../components/home/Footer";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import axios from "axios";
import { database } from "faker";
const Home = () => {
  const [sponsorredVideos, setSponsorredVideos] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("/videos");
      const data = await res.data;
      let filtred = [];
      
      for (let i = 0; i < data.length; i++) {
        if (data[i].isSponsorred == true) {
         
          filtred.push(data[i]);
        } 
      }
      let filtreditem = filtred[Math.floor(Math.random() * filtred.length)]
      const newdata = [filtreditem]
      setSponsorredVideos(newdata);
    };

    fetchdata();
  }, []);
  console.log(sponsorredVideos)
  return (
    <Box
      sx={{
        padding: "0px",
        MARGIN: "0px",
      }}
    >
      <Nav />
      <Hero />
      <Sponsored sponsorredVideos={sponsorredVideos} />
      <Featured />
      <Question />
      <BganimlotCard />
      <Footer />
    </Box>
  );
};

export default Home;
