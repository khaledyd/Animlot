import React from "react";
import { Box } from "@mui/system";
import Sidebar from "../components/dashboard/Sidebar";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const Upload = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
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
        sx={{
          width: "80%",
        }}
      >
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
              marginLeft: { lg: "20%", md: "17%", sm: "15%", xs: "15%" },
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
              Upload Content
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
                label="Keyword"
                type={"text"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  marginTop: "10px",

                }}
              >
                Question type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
              >
                <MenuItem value={"what"}>What </MenuItem>
                <MenuItem value={"how it works"}>How it works</MenuItem>
              </Select>
              <TextField
                id="outlined-basic"
                label="Description"
                type={"text"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  marginTop: "10px",

                }}
              >
                Thumbnail
              </InputLabel>
              <TextField
                id="outlined-basic"
                type={"file"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
              />
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  marginTop: "10px",
 
                }}
              >
                Video
              </InputLabel>
              <TextField
                id="outlined-basic"
                type={"file"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
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
                  Upload
                </Button>
                <Box
                  justifyContent={"flex-start"}
                  sx={{
                    marginLeft: "-70px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Upload;
