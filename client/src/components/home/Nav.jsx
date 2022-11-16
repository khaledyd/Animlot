import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CardMedia from "@mui/material/CardMedia";

const Nav = () => {
  return (
    <Box
      display={"flex"}
      sx={{
        justifyContent: {
          xs: "space-between",
          sm: "space-between",
          md: "space-between",
          marginTop: "10px",
        },
        alignItems: {
          lg: "center",
          md: "center",
        },
        width:"100%"
      }}
    >
      <Box
        sx={{
          xs: "space-between",
          sm: "space-between",
          md: "space-between",
        }}
      >
        <CardMedia
          component="img"
          image="./images/animlot-logo.png"
          alt="green iguana"
          sx={{
         width:"130px"
          }}
        />
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-around"}
        sx={{
          flex: {
            md: "0.7",
            lg: "0.5",
          },
          flexDirection: {
            sm: "column-reverse",
            xs: "column-reverse",
            md: "row",
          },
          color: "#A93B74",
        }}
      >
        <Typography variant="h6" sx={{}}>
          About
        </Typography>
        <Typography variant="h6">Products</Typography>
        <Typography variant="h6">Wtach</Typography>
        <Typography variant="h6">Features</Typography>

        <Box display={"flex"} alignItems={"center"}
        sx={{
            flexDirection:{
                sm: "column-reverse",xs: "column-reverse", md:"row"
            }
        }}
        >
          <Typography variant="h6" marginRight={"10px"} alignSelf={"baseline"}>
            <PersonIcon sx={{
         
        
            }} />
            Log in
          </Typography>
          <Button
            sx={{
              backgroundColor: "#AA3B75",
              color: "white",
              borderColor: "white",
              borderRadius: "10px",
            }}
          >
            Join
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
