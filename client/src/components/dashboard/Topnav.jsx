import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useState } from "react";
import { Avatar, Button, Typography } from "@mui/material";
const Topnav = ({ userVideos }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const { currentVideo } = useSelector((state) => state.video);
  let userid = currentUser._id;
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  let views = [];
  for (let i = 0; i < userVideos.length; i++) {
    const newone = userVideos[i].views;
    views.push(newone);
  }
  const result = views.reduce((a, b) => a + b, 0);


  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row" },

        marginTop: "20px",
        gap: "20px",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          width: { md: "70%", xs: "100%", sm: "70%" },
          justifyContent: { xs: "space-between", sm: "space-between" },
          gap: "30px",
          marginLeft: "20px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px", md: "25px" },
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Followings
          </Typography>
       {  currentUser.subscribedUsers && <Typography
            sx={{
              alignSelf: "center",
              color: "#F35588",
            }}
          >
            {currentUser.subscribedUsers.length}
          </Typography>}
        </Box>
        <Box>
          {" "}
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px", md: "25px" },
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Followers
          </Typography>
          <Typography
            sx={{
              color: "#F35588",
            }}
          >
            {currentUser.subscribers}
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px", md: "25px" },
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Views
          </Typography>
          <Typography
            sx={{
              color: "#F35588",
            }}
          >
            {result}
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            onClick={() => setToggle(!toggle)}
            sx={{
              fontSize: { xs: "15px", sm: "17px", md: "25px" },
              fontWeight: "bold",
              color: "#000",
              display: {
                xs: "block",
                md: "none",
                lg: "none",
                xl: "none",
                sm: "block",
              },
            }}
          >
            {currentUser.fullname}
          </Typography>
          {toggle ? (
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                  sm: "block",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                }}
                onClick={() => navigate("/settings")}
              >
                settings
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
                onClick={() => dispatch(logout())}
              >
                Log out
              </Typography>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
      <Box
        display={"flex"}
        sx={{
          width: "30%",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#AA3B75",
              width: "max-content",
              color: "#FFFFFF",
            }}
            onClick={() => navigate("/upload")}
          >
            Upoad content
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topnav;
