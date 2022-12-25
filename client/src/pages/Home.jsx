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
import Footers from "../components/home/Footers";
import axios from "axios";
import { database } from "faker";
const Home = () => {
  const [sponsorredVideos, setSponsorredVideos] = useState([]);
  const [sponsorredVideo, setSponsorredVideo] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [featureds, setFeatureds] = useState([]);
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
      let filtreditem = filtred[Math.floor(Math.random() * filtred.length)];
      const newdata = [filtreditem];
      setSponsorredVideos(newdata);
    };

    fetchdata();
  }, []);
  //

  ///
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("/videos");
      const data = await res.data;
      let filtreds = [];
      setSponsorredVideo(filtreds);

      for (let i = 0; i < data.length; i++) {
        if (data[i].isSponsorred == true) {
          filtreds.push(data[i]);
        }
      }
    };

    fetchdata();
  }, []);

  //
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("/videos");
      const data = await res.data;
      let filtredfs = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i].isSponsorred == false) {
          filtredfs.push(data[i]);
        }
      }
      let filtreditems =
        filtredfs[Math.floor(Math.random() * filtredfs.length)];
      const newdatas = [filtreditems];
      setFeatured(newdatas);
    };

    fetchdata();
  }, []);
  //
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("/videos");
      const data = await res.data;
      let filtredf = [];
      setFeatureds(filtredf);

      for (let i = 0; i < data.length; i++) {
        if (data[i].isSponsorred == false) {
          filtredf.push(data[i]);
        }
      }
    };

    fetchdata();
  }, []);
  console.log(sponsorredVideos);
  return (
    <Box sx={{
      width: "100%",
   
    }}>
      <Nav />
      <Hero />
      <Sponsored
        sponsorredVideos={sponsorredVideos}
        sponsorredVideo={sponsorredVideo}
      />
      <Featured featured={featured} featureds={featureds} />
      {/*<Question />
      <BganimlotCard />*/}
      {/*<Footer />*/}
      <Footers />
    </Box>
  );
};

export default Home;
