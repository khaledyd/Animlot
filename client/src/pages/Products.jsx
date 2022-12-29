import { Typography } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import React from "react";
import Mininav from "../components/Mininav";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const naviage = useNavigate();
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
            onClick={() => naviage("/home")}
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
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "90%",
              md: "40%",
              lg: "40%",
              xl: "40%",
            },

            height: "max-content",
            marginLeft: "5%",
            padding: "5% 5%",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: "34px",
              fontFamily: "Poppins, sans-serif",
              fontWeight:"bold"
            }}
          >
            Products
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "70%",

              gap: "20px",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
              }}
            >
              content creators’ lot
            </Typography>

            <Typography
              sx={{
                padding: "3px 10px",
                backgroundColor: "#F35588",
                borderRadius: "4px",
                color: "#FFF",
                fontSize: "16px",
              }}
            >
              beta
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
              backgroundColor: "orange",
              height: "300px",
              backgroundImage:
                "url(https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          ></Box>
          <Typography
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "80%",
                xl: "80%",
              },
              fontSize: "20px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            it’s where content creators cant upload their videos talking about
            one of questions types that animlot it built for{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "90%",
              md: "40%",
              lg: "40%",
              xl: "40%",
            },
            backgroundColor: "#F35588",
            height: "max-content",
            marginRight: {
              xs: "0%",
              sm: "0%",
              md: "5%",
              xl: "5%",
            },
            padding: "5% 5%",
            marginLeft: {
              xs: "5%",
              sm: "5%",
              md: "0%",
              lg: "0%",
            },
            marginTop: {
              xs: "0px",
              sm: "0px",
              md: "25%",
              lg: "25%",
              xl: "25%",
            },
          }}
        >
          {" "}
          <Box
            sx={{
              display: "flex",
              width: "90%",

              gap: "20px",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              animation maker’s marketplace
            </Typography>

            <Typography
              sx={{
                padding: "3px 10px",
                backgroundColor: "#FFF",
                borderRadius: "4px",
                color: "#F35588",
                fontSize: "16px",
              }}
            >
              comming!
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
              backgroundColor: "orange",
              height: "300px",
              backgroundImage:
                "url(https://images.pexels.com/photos/1777792/pexels-photo-1777792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          ></Box>
          <Typography
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "80%",
                xl:"80%"
              },
              fontSize: "20px",
              color: "#fff",
            }}
          >
            it’s where content creators cant upload their videos talking about
            one of questions types that animlot it built for{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
