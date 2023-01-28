import { Box } from "@mui/material";
import React from "react";
import Mininav from "../components/Mininav";
import { useEffect, useState } from "react";

import Card from "../components/watch/Card";
import {axiosInstance} from "../config"

const Watch = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axiosInstance.get("/videos");

      setVideos(res.data);

    };

    fetchdata();
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Mininav />
      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          padding: "0px 5%",
          gap: "30px",
        }}
      >
        {videos && videos.map((video) => {
          return <Card key={video._id} videos={video} />;
        })}
      </Box>
    </Box>
  );
};

export default Watch;
