import React from "react";
import styled from "styled-components";
import { Box, color, height } from "@mui/system";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection="column"
      sx={{
        backgroundColor: "#F35588",
        marginTop: "20px",
        height: {
          xs: "500px",
          sm: "400px",
          md: "300px",
          lg: "300px",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "50px",
          alignItems: "center",
          color: "#fff",
          marginBottom: "20px",
          marginLeft: "20px",
        }}
      >
        Your desired answer with the animation
      </Typography>
      <Box
        display={"flex"}
        sx={{
          width: "60%",
        }}
      >
        <Box    sx={{
              width: "20%",
              backgroundColor: "#AA3B76",
        
            }}>
          <FormControl
            sx={{
              width: "100%",
        
            }}
          >
            <InputLabel id="demo-simple-select-label" sx={{
                color: "#fff",
                fontSize:"18px"
            }}>Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              sx={{
       
              color:"#fff"
            }}
            >
              <MenuItem value={"what is"}>what is</MenuItem>
              <MenuItem value={"how it works"}>how it works</MenuItem>
 
            </Select>
          </FormControl>
        </Box>

        <TextField
       
          sx={{
            width: "80%",
            backgroundColor: "#fff",
            outline:"none",
            fontSize:"28px",
         
          }}
        />
        <SearchIcon
          sx={{
            marginLeft: "-50px",
            fontSize: "50px",
            color: "#AA3B76",
            zIndex: "1",
          }}
        />
      </Box>
      <Typography
        sx={{
          marginTop: "20px",
          color:"#fff",
          marginLeft:"20px"

        }}
      >
        Just add the keyword and choose the question type
      </Typography>
      <Typography
        sx={{
          marginTop: "10px",
          color:"#fff",
        }}
      >
        then we got you
      </Typography>
    </Box>
  );
};

export default Hero;
