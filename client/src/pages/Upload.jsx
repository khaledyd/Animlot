import React from "react";
import { Box } from "@mui/system";
import Sidebar from "../components/dashboard/Sidebar";
import {
  Button,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import app from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import { useSelector } from "react-redux";

const Upload = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState([]);
  const [isSponsorred, setisSponsorred] = useState(false);
  const [fullname, setFullname] = useState(currentUser.fullname);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCheck = (event) => {
    setisSponsorred(event.target.checked);
  };
  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post("/videos", { ...inputs, isSponsorred ,fullname  });

    console.log(res.data);
  };
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
                name="title"
                onChange={handleChange}
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
                name="typeOfQuestion"
                onChange={handleChange}
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
                name="desc"
                onChange={handleChange}
              />
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  marginTop: "10px",
                }}
              >
                Thumbnail
              </InputLabel>

              {imgPerc > 0 ? (
                "Uploading:" + imgPerc + "%"
              ) : (
                <TextField
                  id="outlined-basic"
                  type={"file"}
                  variant="outlined"
                  sx={{
                    width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                    marginTop: "10px",
                  }}
                  accept="image/*"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              )}
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  marginTop: "10px",
                }}
              >
                Video
              </InputLabel>
              {videoPerc > 0 ? (
                "Uploading:" + videoPerc + "&"
              ) : (
                <TextField
                  id="outlined-basic"
                  type={"file"}
                  variant="outlined"
                  sx={{
                    width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                    marginTop: "10px",
                  }}
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files[0])}
                />
              )}
              <Box
                sx={{
                  width: "50%",
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  checkh to sponsor
                </InputLabel>
                <Checkbox onChange={handleCheck} />
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    marginTop: "10px",
                    backgroundColor: "#F35588",
                  }}
                  onClick={handleUpload}
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
