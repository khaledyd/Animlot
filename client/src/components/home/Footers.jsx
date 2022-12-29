import { Button, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        marginTop:"100px"
      }}
    >
      
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "100%",
            lg: "100%",
            ms: "100%",
          },
          height: "max-content",
          backgroundColor: "#F35588",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
            sm: "column",
            lg: "row",
            fontSize:"20px"
          },
          paddingBottom:"30px"
        }}
      >
        <Box
          sx={{
            sm: "100%",
            lg: "40%",
            md: "40%",
            xs: "100%",
            paddingLeft: "30px",
          }}
        >
          <img
            src="./images/t1.png"
            alt="foterlogo"
            style={{
              width: "150px",
              height: "70px",
              color: "#fff",
              marginTop: "20px",
            }}
          />
         
          <Box
            sx={{
              marginTop: "30px",
              color: "#FFF",
            }}
          >
            <FacebookIcon
              sx={{
                marginRight: "10px",
              }}
            />
            <TwitterIcon
              sx={{
                marginRight: "10px",
              }}
            />
            <LinkedInIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: {
              sm: "100%",
              lg: "60%",
              md: "60%",
              xs: "100%",
            },
       
       
          }}
        >
          <Box
            sx={{
              marginTop: "20px",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              marginLeft : "30px",
         
            }}
          >
            <Typography>Home</Typography>
            <Typography>What we offer</Typography>
            <Typography>The core services</Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <Typography>Careers</Typography>
            <Typography>Use cases</Typography>
            <Typography>Press</Typography>
            <Typography>Blogs</Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              marginRight: "30px",
            }}
          >
            <Typography>Contact us</Typography>
            <Typography>Help</Typography>
            <Typography>Apps</Typography>
            <Typography>Third-party apps</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          backgroundColor: "#fff",
          display: "flex",
          marginTop:"30px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            xs:"column",
            md:"row",
            lg:"row",
            sm:"row"
          }
        }}
      >
        <Typography
          sx={{
            marginRight: "30px",
            color: "#3C4263",
          }}
        >
          Terms |
        </Typography>
        <Typography
          sx={{
            marginRight: "30px",
          }}
        >
          Privaciy |
        </Typography>
        <Typography
          sx={{
            marginRight: "30px",
          }}
        >
          copyWrite |
        </Typography>
        <Typography>© 2022 Animlot All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
