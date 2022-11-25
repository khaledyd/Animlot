import React from "react";
import { Box } from "@mui/system";
import Mininav from ".././components/Mininav";
import Card from "../components/search/Card";
import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;
  console.log(query);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);

    };
    fetchVideos();
  }, [query]);
  console.log(videos)
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box>
        <Mininav />
      </Box>
      <Box
        sx={{
          paddingLeft: "20px",
          display: "flex",

          width: "100%",
          flexWrap: "wrap",
          marginTop: "80px",
        }}
      >
        {videos.map((video) => {
          return <Card video={video} />;
        })}
      </Box>
    </Box>
  );
};

export default Search;
