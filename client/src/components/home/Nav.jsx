import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

const Nav = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

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
        width: "100%",
   
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
            width: "130px",
            cursor: "pointer",
          }}
          onClick={()=>navigate("/")}
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
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#A93B74",
              padding: "2px 10px",
              transitionDuration: "0s",
            },
          }}
          onClick={() => navigate("/About")}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#A93B74",
              padding: "2px 10px",
              transitionDuration: "0s",
            },
          }}
          onClick={() => navigate("/Products")}
        >
          Products
        </Typography>
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#A93B74",
              padding: "2px 10px",
              transitionDuration: "0s",
            },
          }}
          onClick={() => navigate("/Watch")}
        >
          Wtach
        </Typography>

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
            {currentUser ? (
              <Link
                href={"/dashboard"}
                underline="none"
                sx={{
                  color: "#AA3B75",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#A93B74",
                    padding: "2px 10px",
                    transitionDuration: "0s",
                  },
                }}
              >
                {currentUser.fullname}
              </Link>
            ) : (
              "log in"
            )}
          </Typography>
          {currentUser ? (
            <Button
              sx={{
                backgroundColor: "#AA3B75",
                color: "white",
                borderColor: "white",
                borderRadius: "10px",
              }}
              onClick={() => navigate("/upload")}
            >
              Upload
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
