import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../Redux/userSlice";
import { useSelector } from "react-redux";
import { CardMedia } from "@mui/material";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function DribbbleShot({ sponsorredVideos }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(sponsorredVideos);
  return (
    <Card
      sx={{
        width: 300,
        bgcolor: "initial",
        boxShadow: "none",
        "--Card-padding": "0px",
        marginRight: "25px",
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "block",
        },
      }}
    >
      {sponsorredVideos && (
        <Box sx={{ position: "relative" }}>
          <Link to={`/videoid/${sponsorredVideos._id}`}>
            <CardMedia
              component="video"
              controls
              src={sponsorredVideos.videoUrl}
            />
          </Link>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 1.5,

          padding: "10px 10px",
          borderRadius: "15px",
          boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
        }}
      >
        <Avatar
          src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
          size="lg"
          sx={{ "--Avatar-size": "3.5rem" }}
        />
        {sponsorredVideos && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"baseline"}
          >
            <Box display={"flex"}>
              <Typography
                sx={{
                  fontSize: "sm",
                  fontWeight: "md",
                  fontFamily: "Roboto , sans-serif",
                }}
              >
                {sponsorredVideos.fullname}
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
                {sponsorredVideos.typeOfQuestion}
              </Box>
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontFamily: "Roboto , sans-serif",
              }}
            >
              {sponsorredVideos.title}
            </Typography>
            <Typography variant="h6">
       100
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
  );
}
