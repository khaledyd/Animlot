import { Box } from "@mui/system";
import React from "react";
import Lots from "../components/dashboard/Lots";
import Sidebar from "../components/dashboard/Sidebar";
import Topnav from "../components/dashboard/Topnav";
import { useState, useEffect } from "react";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { async } from "@firebase/util";
import { dislike, fetchSuccess, like } from "../Redux/videoSlice";
import { Button, Typography } from "@mui/material";
import {axiosInstance} from "../config"
const Dashboard = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const { currentVideo } = useSelector((state) => state.video);
  let userid = currentUser._id;

  const [userVideos, setUserVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axiosInstance.get(`/videos/getusers/${userid}`);
      
        setUserVideos(videoRes.data);
      } catch (err) {}
    };

    fetchData();
  }, [userid]);

  return (
    <Box
      display={"flex"}
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "20%",
          display: {
            xs: "none",
            sm: "none",
            lg: "block",
            md: "block",
          },
        }}
      >
        <Sidebar />
      </Box>
      <Box
        display={"flex"}
        sx={{
          width: "80%",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: {
              xs: "space-between",
              sm: "baseline",
            },
          }}
        >
          {" "}
          <Topnav userVideos ={userVideos} />
        </Box>
     

        <Box>
          {" "}
          <Lots userVideos={userVideos} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
