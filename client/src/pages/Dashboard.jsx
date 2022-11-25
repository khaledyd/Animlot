import { Box } from "@mui/system";
import React from "react";
import Lots from "../components/dashboard/Lots";
import Sidebar from "../components/dashboard/Sidebar";
import Topnav from "../components/dashboard/Topnav";
import { useState, useEffect } from "react";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { async } from "@firebase/util";
import { dislike, fetchSuccess, like } from "../Redux/videoSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser._id);
  const { currentVideo } = useSelector((state) => state.video);
  let userid = currentUser._id;
  console.log(currentUser)
  const [userVideos, setUserVideos] = useState([]);
console.log(userVideos)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/getusers/${userid}`);
        console.log(videoRes.data);
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
        <Box>
          {" "}
          <Topnav />
        </Box>
        <Box>
          {" "}
          <Lots userVideos = {userVideos} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
