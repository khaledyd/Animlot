import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: max-content;
  height: max-content;
`;

const Footer = () => {
  return (
    <Box
      mt={30}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "max-content",
        width: "100%",
      }}
    >
      <Box
        pl={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          backgroundColor: "#F35588",
          height: "max-content",
          color: "#Fff",
          width: "100%",
          marginBottom: "40px",
        }}
      >
        <Box pt={2} display={"flex"} sx={{ flexDirection: "column" }}>
          <Typography variant="h6">Wadabalan</Typography>
          <Typography variant="p">About</Typography>
          <Typography variant="p">Services</Typography>
          <Typography variant="p">Careers</Typography>
        </Box>
        <Box pt={2} display={"flex"} sx={{ flexDirection: "column" }}>
          <Typography variant="h6">Resources</Typography>
          <Typography variant="p">Blogs</Typography>
          <Typography variant="p">Press</Typography>
        </Box>
        <Box pr={2} pt={2} display={"flex"} sx={{ flexDirection: "column" }}>
          <Typography variant="h6">Use cases</Typography>
          <Typography variant="p">Organizers</Typography>
          <Typography variant="p">Creators</Typography>
        </Box>
      </Box>
      <Box
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          height: "max-content",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {" "}
        <CardMedia
          component="img"
          image="./images/animlot-logo.png"
          alt="green iguana"
          sx={{
            width: "130px",
          }}
        />
        <Box
          gap={2}
          display={"flex"}
          sx={{
            marginTop: "20px",
            flexDirection: { xs: "row", sm: "row", md: "row" },
          }}
        >
          <Typography variant="p">Terms |</Typography>
          <Typography variant="p">Privacy |</Typography>
          <Typography variant="p">Copywriter |</Typography>
        </Box>
        <Box>© 2011 wadabaln All Rights Reserved</Box>
      </Box>
    </Box>
  );
};

export default Footer;
