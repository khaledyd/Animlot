import { Box } from "@mui/system";
import React from "react";
import Lots from "../components/dashboard/Lots";
import Sidebar from "../components/dashboard/Sidebar";
import Topnav from "../components/dashboard/Topnav";

const Dashboard = () => {
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
      <Box display={"flex"} sx={{
          width:"80%",
          flexDirection:"column",
      }}>
        <Box>
          {" "}
          <Topnav />
        </Box>
        <Box>
          {" "}
          <Lots />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
