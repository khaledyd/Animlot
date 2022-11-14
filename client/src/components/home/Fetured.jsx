import React from "react";
import { Box } from "@mui/system";
import { CardMedia, Typography } from "@mui/material";
import LGScard from "./LGScard";
import Spcard from "./Spcard";
import Flgcard from "./Flgcard";
import Fcard from "./Fcard";

const Sponsored = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        marginTop: "30px",
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
      
          sx={{
            marginRight: "20px",
            width: {
                  
                  md:"100%",
                  sm:"100%",
                  xs:"100%",
                  lg:"75%"
                  },
          }}
        >
          <CardMedia
            component="img"
            image="./images/spimg.jpg"
            alt="green iguana"
            sx={{
            
              height: "350px",
              objectFit: "cover",
              borderRadius: "10px",
              paddingLeft: "20px",
            }}
          />
        </Box>
        <Box
          sx={{
            paddingRight: "10px",
            paddingLeft:"10px"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
              },
              color:"#F35588",
              marginBottom:"10px"
            }}
          >
            Featured
          </Typography>
          <Box
            sx={{
            
            }}
          >
         <Flgcard/>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        sx={{
          marginTop: "30px",
          marginLeft: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
       <Fcard/>
       <Fcard/>
       <Fcard/>
       <Fcard/>
       <Fcard/>
       <Fcard/>
       <Fcard/>
       <Fcard/>
       
      </Box>
    </Box>
  );
};

export default Sponsored;
