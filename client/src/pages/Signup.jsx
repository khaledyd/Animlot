import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Nav from "./../components/home/Nav";

const Signup = () => {
  return (
    <Box>
      <Nav />
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
            marginLeft:{lg: "20%" , md:"20" , sm:"15%", xs:"15%"},
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
              label="Fullname"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg:"70%" , md:"70%",
                sm:"100%",
                xs:"100%"
                },
                marginTop: "10px",
              }}
            />
                  <TextField
              id="outlined-basic"
              label="Email"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg:"70%" , md:"70%",
                sm:"100%",
                xs:"100%"
                },
                marginTop: "10px",
              }}
            />
                  <TextField
              id="outlined-basic"
              label="Password"
              type={"password"}
              variant="outlined"
              sx={{
                width: { lg:"70%" , md:"70%",
                sm:"100%",
                xs:"100%"
                },
                marginTop: "10px",
              }}
            />
            <TextField
              id="outlined-basic"
              type={"password"}
              label="confirm password"
              variant="outlined"
              sx={{
                width: { lg:"70%" , md:"70%",
                sm:"100%",
                xs:"100%"},
                marginTop: "10px",
              }}
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
              >
                Log in
              </Button>
              <Box justifyContent={"flex-start"} sx={{
                marginLeft:"-70px"
              }}>
                <Typography sx={{
                  color: "#F35588",
                }}>Sing up</Typography>
                <Typography sx={{
                  color: "#F35588",
                }}>Forget password</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
