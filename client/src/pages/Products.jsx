import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Mininav from "../components/Mininav";
import PersonIcon from "@mui/icons-material/Person";

const Products = () => {
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
              xs: "space-between",
              sm: "space-between",
              md: "space-between",
              lg: "space-between",
              xl: "space-between",
            },
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
      <Box sx={{
          width: "100%",
          display: "flex",
      }}>
        <Box sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
        backgroundColor:"green",
        height:"max-content",
        }}>
          {" "}
          <Typography>Products</Typography>
        </Box>
        <Box sx={{
               width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            backgroundColor:"gray"
        }}>hi</Box>
      </Box>
    </Box>
  );
};

export default Products;
