import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CardMedia from "@mui/material/CardMedia";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import animlotlogo from "../asets/animlot-logo.png";

const Nav = () => {
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
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
        width: { xs: "100%", sm: "100%", md: "100%" },
      }}
    >
      <Box
        sx={{
          xs: "space-between",
          sm: "space-between",
          md: "space-between",

          width: { xs: "30%", sm: "10%", md: "10%" },
          paddingRight: "50px",
        }}
      >
        <CardMedia
          component="img"
          image={animlotlogo}
          alt="green iguana"
          sx={{
            width: "130px",
          }}
        />
      </Box>
      <Box
        display={"flex"}
        sx={{
          width: { xs: "85%", sm: "65%", lg: "85%" },
          marginRight: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#AA3B76",
            height: "max-content",
            width: "30%",
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
            width: "100%",
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
          onClick={() => navigate(`/search?q=${q}&t=${type} `)}
        />
      </Box>

      <Box
        display={"flex"}
        sx={{
          color: "#A93B74",
          width: { xs: "5%", sm: "5%", md: "5%" },
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{
            flexDirection: {
              sm: "column-reverse",
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Typography variant="h6" marginRight={"10px"} alignSelf={"baseline"}>
            <PersonIcon sx={{ fontSize: "40px" }} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
