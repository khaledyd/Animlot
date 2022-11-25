import { Box } from "@mui/system";
import React from "react";
import { Avatar, Button, TextField, Typography } from "@mui/material";

const SingleLot = ({ videos }) => {
  return (
    <Box
      sx={{
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 1.5,

          padding: "10px 10px",
          borderRadius: "15px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Avatar
          src="https://images.pexels.com/photos/9969230/pexels-photo-9969230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          size="md"
          sx={{ "--Avatar-size": "3.5rem" }}
        />
        <Box display={"flex"} flexDirection={"column"} alignItems={"baseline"}>
          <Box display={"flex"}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "md",
                fontFamily: "Roboto , sans-serif",
              }}
            >
              {videos.fullname}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: "15px",
              fontFamily: "Roboto , sans-serif",
              color: "#F35588",
            }}
          >
            14 days ago
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "15px",
              fontFamily: "Roboto , sans-serif",
              color: "#000",
            }}
          >
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleLot;
