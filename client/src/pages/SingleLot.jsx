import { Box } from "@mui/system";
import React from "react";
import Mininav from "../components/Mininav";
import BganimlotCard from "../components/home/BganimlotCard";
import Singlelotcard from "../components/singlelot/Singlelotcard";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Commentcard from "./../components/singlelot/Commentcard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { dislike, fetchSuccess, like } from "../Redux/videoSlice";
import { subscription } from ".././Redux/userSlice";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const SingleLot = () => {
  const [videos, setVideo] = useState({});
  console.log(videos);
  const [subs, setsubs] = useState({});
  const [likecount, setLikes] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  let data = currentUser.fullname;
  const [comments, setcomments] = useState([
    {
      describtion: "",
      objectId: "_id",
      username: data,
    },
  ]);
  const [commentlists, setcommentlists] = useState([]);
  console.log(commentlists);
  const [username, setusername] = useState("");
  const dispatch = useDispatch();

  console.log(likecount.length);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/${path}`);
        setVideo(videoRes.data);
        setcommentlists(videoRes.data.comments);
        setLikes(videoRes.data.likes);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        console.log(channelRes);

        setsubs(channelRes.data);

        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(subs._id)
      ? await axios.put(`/users/unsub/${subs._id}`)
      : await axios.put(`/users/sub/${subs._id}`);
    dispatch(subscription(subs._id));
  };

  const addcoment = async (e) => {
    e.preventDefault();

    const res = await axios.put("/videos/comments/" + path, {
      comments,
    });
    console.log(res);
  };

  const handleChange = (e) => {
    setcomments((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const commentlist = [videos];
  return (
    <Box>
      <Mininav />
      <Singlelotcard videos={videos} />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{
          width: "100%",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              width: { md: "50%", xs: "100%", sm: "1005" },
              paddingLeft: "20px",
            }}
          >
            <Typography
              variant={"h5"}
              sx={{
                color: "#AA3B76",
                display: "flex",
                alignItems: "center",
              }}
            >
              Discriptions
              <KeyboardArrowDownIcon
                sx={{
                  aleighsSelf: "center",
                  fontSize: "30px",
                }}
              />
            </Typography>
            {videos && (
              <Typography
                variant={"p"}
                sx={{
                  paddingTop: "20px",
                  fontSize: "20px",
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: "32px",
                }}
              >
                {videos.desc}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              marginTop: "50px",
              paddingLeft: "20px",
              width: { md: "50%", xs: "100%", sm: "100" },
              marginRight: "10px",
            }}
          >
            {" "}
            <Typography
              variant={"h5"}
              sx={{
                color: "#AA3B76",
                display: "flex",
                alignItems: "center",
              }}
            >
              Comments
            </Typography>
            <Box width={"100%"} alignItems={"center"}>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                name="describtion"
                onChange={handleChange}
              ></TextField>

              <Button
                sx={{
                  backgroundColor: "#F35588",
                  color: "#FFF",
                  marginTop: "10px",
                  height: "55px",
                  width: "max-content",
                  fontSize: "15px",
                }}
                onClick={addcoment}
              >
                Comment
              </Button>
            </Box>
            {commentlists.map((m) => {
              return <Commentcard commentlists={m} />;
            })}
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <ThumbUpIcon
                sx={{
                  fontSize: "40px",
                  paddingRight: "20px",
                  color: "#F35588",
                  cursor: "pointer",
                }}
                onClick={handleLike}
              />
              {videos && (
                <Typography
                  sx={{
                    fontSize: "40px",
                    paddingRight: "20px",
                    color: "#F35588",
                  }}
                >
                  {likecount.length}
                </Typography>
              )}
              <ThumbDownAltIcon
                sx={{
                  fontSize: "40px",
                  paddingRight: "20px",
                  color: "gray",
                  cursor: "pointer",
                }}
                onClick={handleDislike}
              />

              <Button
                sx={{
                  backgroundColor: "#F35588",
                  color: "#FFF",
                  marginRight: "20px",
                }}
                onClick={handleSub}
              >
                Follow
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  paddingRight: "20px",
                  color: "#AA3B75",
                }}
              >
                Followers
              </Typography>
              {videos && (
                <Typography
                  sx={{
                    fontSize: "20px",
                    paddingRight: "50px",
                    color: "#F35588",
                  }}
                >
                  {subs.subscribers}
                </Typography>
              )}
            </Box>
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleLot;
