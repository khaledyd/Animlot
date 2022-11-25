import React from "react";
import { Box } from "@mui/system";
import Mininav from ".././components/Mininav";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
const Settings = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [inputs, setInputs] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const handlechange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const hanldeupdate = async (e) => {
    e.preventDefault();
    const updateduser = {
      fullname: inputs.fullname,
      email: inputs.email,
      password: inputs.password,
  
    };
    const res = await axios.put(`/users/${currentUser._id}`,updateduser)
    console.log(res.data)

  
    if(password.value == confirmPassword.value){
      const res = await axios.put(`/users/${currentUser._id}`,password,confirmPassword)
      console.log(res.data)
    }
    else{
      alert("password and confirm password must be the same")
  };
}
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
              onChange={handlechange}
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
              onChange={handlechange}
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
              onChange={hanldeupdate}
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
                onClick={hanldeupdate}
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