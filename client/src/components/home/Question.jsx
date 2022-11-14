import React from "react";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";
import AnimlotCard from "./AnimlotCard";

const Question = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        width: "100%",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          paddingLeft: "50px",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          display={"flex"}
          sx={{
            fontSize: "26px",
            alignItems: "    center",
            color: "#AA3B75",
          }}
        >
          The two Questions ANIMLOT is built for
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          width: "90%",
          marginLeft: "50px",
          backgroundColor: "#FCFCFC",
        }}
      >
        <Box
          display={"flex"}
          sx={{
            paddingTop: "30px",
            width: "100%",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "maximum-content",

              borderLeft: "30px solid #AA3B75",
              marginBottom: "10px",
            }}
          >
            <Typography
              sx={{
                paddingLeft: "30px",
                border: "1px solid #707070",
                width: "80%",
                fontSize: "30px",
                color: "#AA3B75",
              }}
            >
              what is ?
            </Typography>
          </Box>
          <Box
            width={{
              width: "50%",
              height: "maximum-content",
              borderLeft: "30px solid #AA3B75",
              color: "#AA3B75",
              marginBottom: "10px",
            }}
          >
            <Typography
              sx={{
                paddingLeft: "30px",
                border: "1px solid #707070",
                width: "100%",
                fontSize: "30px",
              }}
            >
              how it works ?
            </Typography>
          </Box>
        </Box>
        <Box
          alignItems={"center"}
          display={"flex"}
          sx={{
            width: "100%",
            marginTop: "50px",
            flexWrap: "wraP",
          }}
        >
          <AnimlotCard />
          <AnimlotCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Question;
