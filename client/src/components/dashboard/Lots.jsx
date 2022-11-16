import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Fcard from "../home/Fcard"

const Lots = () => {
    return (
        <Box sx={{
            paddingLeft:"20px",
            paddingTop:"100px",
            width:"100%"
        }}>
            <Typography  variant='h4' sx={{
       marginBottom:"20px", 
       color:"#F35588"
            }}>Your Lots </Typography>
            <Box display={"flex"} sx={{
                flexWrap: "wrap",
                width:"100%"
            }}>
                <Fcard/>
                <Fcard/>
                
            
         
            </Box>
        </Box>
    );
}

export default Lots;
