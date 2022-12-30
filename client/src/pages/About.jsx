import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Mininav from "../components/Mininav";
import PersonIcon from "@mui/icons-material/Person";

const About = () => {
  return (
    <Box
      sx={{
        minWidth: {
          xs: "100vh",
          sm: "100vh",
        },
      }}
    >
      <Box
        sx={{
          width: {
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs:"space-between",
              sm:"space-between",
              md:"space-between",
              lg:"space-between",
              xl:"space-between",
            }
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "50%",
              sm: "50%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="./images/animlot-logo.png"
            style={{
              marginLeft: "20px",
              width: "200px",
              height: "70px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: "50%",
              sm: "50%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "0px",
          }}
        >
          <PersonIcon
            style={{
              fontSize: "50px",
              justifyContent: "flex-end",
              color: "#F35588",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          minWidth: {
            xs: "100vh",
            sm: "100vh",
          },
        }}
      >
        <Box
          sx={{
            marginTop: "50px",
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
          }}
        >
          <img src="./images/aboutus.png" style={{
            marginLeft: "30px"
          }} />
        </Box>
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "90%",
              md: "70%",
              lg: "70%",
            },
            display:"flex",
            alignItems:{
              xs: "center",
                            sm: "center",
                            md: "flex-start",
                            lg: "flex-start",
                            xl: "flex-start",
            },
            flexDirection:"column",
          }}
        >
          <Typography
            sx={{
              fontSize: "34px",
              marginTop: "20px",
              color: "#F35588",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              marginLeft:"50px"
            }}
          >
            About us{" "}
          </Typography>
          <Typography
            sx={{
              marginTop: "10px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "21px",
              marginBottom: "30px",
              marginLeft:"50px",
              lineHeight: "35px",
              letterSpacing:"2px",
         
            }}
          >
            Animlot is a web app where people can search and find animated
            videos answering the two common questions (what is and how it works)
            about their search. Content creators and animation makers are
            working together to share animated videos. When people hear a thing
            for the first time, two questions commonly come to their heads: what
            is that thing, and how it works. It’s the basic knowledge of a
            particular item. In the real world, the web video hosting sites,
            when people try to find the (what and how it works) related content,
            it’s not that smooth, and many results are coming. That’s why
            animlot provides searchers two options before the search, and
            searchers only choose the question type (what or how it works) and
            then type the keyword. The results will show animated videos and
            answer one of the questions
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
