import React from "react";

import { Box } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
const Topnav = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs:"column" , sm: "row", md: "row"},
  
        marginTop: "20px",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          width:  {md:"70%" , xs:"100%" ,sm:"70%"},
          justifyContent: { xs: "space-between" , sm : "space-between" },
          marginLeft: "20px",
          marginRight: "40px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: {xs:"15px", sm:"17px" , md:"25px"},
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Followings
          </Typography>
          <Typography
            sx={{
              alignSelf: "center",
              color: "#F35588",
            }}
          >
            100k
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            sx={{
                fontSize: {xs:"15px", sm:"17px" , md:"25px"},
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
            100k
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            sx={{
                fontSize: {xs:"15px", sm:"17px" , md:"25px"},
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
            100k
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} sx={{
          width:"30%"
      }}>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Avatar
          src="https://images.pexels.com/photos/9969230/pexels-photo-9969230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          size="lg"
          sx={{ "--Avatar-size": "3.5rem" }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#AA3B75",
      width :"max-content",
            color: "#FFFFFF",
          }}
        >
          Upoad content
        </Button>
      </Box>
      </Box>
     
    </Box>
  );
};

export default Topnav;
