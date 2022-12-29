import React from "react";
import { Typography, Box, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const hanldelogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#F35588",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            paddingTop: "50px",
            paddingLeft: "10px",
          }}
        >
          Khalid dahir
          <PersonIcon />
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: "50px",
          color: "#fff",
          fontSize: "30px",
          paddingLeft: "10px",
        }}
      >
        <Typography
          sx={{
            paddingTop: "22px",
            marginBottom:"20px"
          }}
          onClick={()=>navigate("/settings")}
        >
          Account settings{" "}
        </Typography>
    
   
    
   
      
    
        <Button
          sx={{
            backgroundColor: "#fff",
            width: "max-content",
  
          }}
          onClick={hanldelogout}
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
