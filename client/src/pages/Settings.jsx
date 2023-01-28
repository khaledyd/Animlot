import React from "react";
import { Box } from "@mui/system";
import Mininav from ".././components/Mininav";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {axiosInstance} from "../config"
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setfullname] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (password) {
        const res = await axiosInstance.put(`/users/${currentUser._id}`, {
          userId: currentUser._id,

          password: password,
        });
        navigate("/dashboard");
      } else if (fullname) {
        const res = await axiosInstance.put(`/users/${currentUser._id}`, {
          userId: currentUser._id,
          fullname: fullname,
        });
        navigate("/dashboard");
      } else if (email) {
        const res = await axiosInstance.put(`/users/${currentUser._id}`, {
          email: email,
          userId: currentUser._id,
        });
        navigate("/dashboard");
      } else {
      }
    } catch (err) {}
  };

  return (
    <Box>
      <Mininav />
      <Box
        sx={{
          marginTop: "5%",
          width: "100%",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{
            width: "50%",
            marginLeft: { lg: "20%", md: "20", sm: "15%", xs: "15%" },
            backgroundColor: "#FCFCFC",
            padding: "100px 60px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#F35588",
            }}
          >
            Settings
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              width: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Fullname"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              placeholder={currentUser.fullname}
              name="fullname"
              onChange={(e) => setfullname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              placeholder={currentUser.email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type={"password"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/*<TextField
              id="outlined-basic"
              type={"password"}
              label="confirm password"
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              name="confirmpassword"
              onChange={(e)=>setconfirmPassword(e.target.value)}
            />*/}
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  backgroundColor: "#F35588",
                }}
                onClick={handlesubmit}
              >
                Update info
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
