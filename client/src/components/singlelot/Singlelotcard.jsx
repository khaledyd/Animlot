import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { CardMedia } from "@mui/material";
import { height } from "@mui/system";

export default function DribbbleShot({ videos }) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        width: {
          md: "100%",
          lg: "100%",
          sm: "100%",
          xs: "100%",
        },
      }}
    >
      <Box
        sx={{
          width: {
            md: "95%",
            lg: "95%",
            sm: "95%",
            xs: "95%",
          },
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Card
          sx={{
            width: {
              md: "98%",
              lg: "98%",
              sm: "98%",
              xs: "98%",
            },
            padding: "20px 10px",
            bgcolor: "initial",
            boxShadow: "none",
            "--Card-padding": "0px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            {videos && (
              <AspectRatio ratio="2/1">
                <CardMedia
                  component="video"
                  controls
                  src={videos.videoUrl}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </AspectRatio>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 1.5,

              padding: "10px 10px",
              borderRadius: "15px",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              backgroundColor: "#fff",
            }}
          >
            <Avatar
              src="https://images.pexels.com/photos/9969230/pexels-photo-9969230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              size="lg"
              sx={{ "--Avatar-size": "3.5rem" }}
            />
            {videos && (
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"baseline"}
              >
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
                  <Box
                    sx={{
                      backgroundColor: "#F35588",
                      padding: "3px 10px",
                      fontSize: "12px",
                      marginLeft: "10px",
                      color: "#fff",
                    }}
                  >
                    {videos.typeOfQuestion}
                  </Box>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "30px",
                    fontFamily: "Roboto , sans-serif",
                  }}
                >
                  {videos.title}
                </Typography>
                <Typography variant="h6">
                  2300
                  <Typography
                    sx={{
                      color: "#F35588",
                      marginLeft: "2px",
                      fontFamily: "Roboto , sans-serif",
                    }}
                  >
                    views
                  </Typography>
                </Typography>
              </Box>
            )}
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
