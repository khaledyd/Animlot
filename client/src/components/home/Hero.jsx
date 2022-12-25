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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const navigate = useNavigate();

  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const handleclick = (e) => {
    e.preventDefault();
    navigate(`/search?q=${q}`);
  };
  return (
    <Box
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
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
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
        <Box
          sx={{
            width: "20%",
            backgroundColor: "#AA3B76",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#fff",
                fontSize: "18px",
              }}
            >
              Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              sx={{
                color: "#fff",
              }}
              onChange={(e) => setType(e.target.value)}
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
            outline: "none",
            fontSize: "28px",
          }}
          onChange={(e) => setQ(e.target.value)}
        />
        <SearchIcon
          sx={{
            marginLeft: "-50px",
            fontSize: "50px",
            color: "#AA3B76",
            zIndex: "1",
          }}
          onClick={() => navigate(`/search?q=${(q, type)}`)}
        />
      </Box>
      <Typography
        sx={{
          marginTop: "20px",
          color: "#fff",
          marginLeft: "20px",
        }}
      >
        Just add the keyword and choose the question type
      </Typography>
      <Typography
        sx={{
          marginTop: "10px",
          color: "#fff",
        }}
      >
        then we got you
      </Typography>
    </Box>
  );
};

export default Hero;
