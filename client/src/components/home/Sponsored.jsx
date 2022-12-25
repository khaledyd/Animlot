import React from "react";
import { Box } from "@mui/system";
import { CardMedia, Typography } from "@mui/material";
import LGScard from "./LGScard";
import Spcard from "./Spcard";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "./Slider";

const Sponsored = ({ sponsorredVideos, sponsorredVideo }) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        marginTop: "30px",

      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          sx={{

            width: {
              md: "100%",
              sm: "100%",
              xs: "100%",
              lg: "75%",
            },
            backgroundColor: "#F35588",
            height: "350px",
          }}
        >
          {/*<CardMedia
            component="img"
            image="./images/ft.jpg"
            alt="green iguana"
            sx={{
    
              objectFit: "cover",
              borderRadius: "10px",
              paddingLeft: "20px",
            }}
          />*/}
          {sponsorredVideos.map((m)=>{
            return(
              <Slider  sponsorredVideos={m} />
            )
          })}
        </Box>
        <Box
          sx={{
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
              },
              color: "#F35588",
              marginBottom: "10px",
            }}
          >
            Sponsored
          </Typography>
          <Box>
            {sponsorredVideos.map((s) => {
              return <Spcard sponsorredVideos={s} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {sponsorredVideo.map((sp) => {
          return <LGScard sponsorredVideo={sp} />;
        })}
      </Box>
    </Box>
  );
};

export default Sponsored;
