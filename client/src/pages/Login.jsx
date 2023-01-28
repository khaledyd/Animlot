import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Nav from "./../components/home/Nav";
import { useState } from "react";
import { axiosInstance } from "../config";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { async } from "@firebase/util";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axiosInstance
          .post("/auth/google", {
            fullname: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
        
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    const data = {
      email,
      password,
    };
    try {
      const res = await axiosInstance.post(
        "/auth/signin/",data,
     

        { withCredentials: true }
      );

      //const cookie = res.headers['set-cookie'][0];
      //Cookies.set('access_token',token);
    
      dispatch(loginSuccess(res.data.data1));
      navigate("/");

      Cookies.set("access_token", res.data.data1);
 
 
    } catch (err) {

    }
  };

  return (
    <Box>
      <Nav />
      <Box
        sx={{
          marginTop: "10%",
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
            Log in
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
              label="Email"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              type={"password"}
              label="password"
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
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
                Log in
              </Button>
            
              <Box
                justifyContent={"flex-start"}
                sx={{
                  marginLeft: "-70px",
                }}
              >
                <Typography
                  sx={{
                    color: "#F35588",
                    cursor:"pointer"
                  }}
                  onClick = {()=>navigate("/signup")}
                >
                  Sing up
                </Typography>
                <Typography
                  sx={{
                    color: "#F35588",
                    cursor:"pointer"
                  }}
                  onClick = {()=>navigate("/ForgetPassword")}
                >
                  Forget password
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
