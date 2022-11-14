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

export default function DribbbleShot() {
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

          backgroundColor: "#F35588",
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
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src="https://images.pexels.com/photos/5430750/pexels-photo-5430750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  srcSet="https://images.pexels.com/photos/5430750/pexels-photo-5430750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
                />
              </figure>
            </AspectRatio>
            <CardCover
              className="gradient-cover"
              sx={{
                "&:hover, &:focus-within": {
                  opacity: 1,
                },
                opacity: 0,
                transition: "0.1s ease-in",
                background:
                  "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
              }}
            >
              {/* The first box acts as a container that inherits style from the CardCover */}
              <Box>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexGrow: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography
                    level="h2"
                    noWrap
                    sx={{
                      fontSize: "lg",
                      backgroundColor: "black",
                      padding: "3px 3px",
                    }}
                  >
                    <Link
                      overlay
                      underline="none"
                      sx={{
                        color: "#fff",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "block",
                      }}
                    >
                      20:10
                    </Link>
                  </Typography>
                  <IconButton size="sm" color="neutral" sx={{ ml: "auto" }}>
                    <CreateNewFolder />
                  </IconButton>
                  <IconButton size="sm" color="neutral">
                    <Favorite />
                  </IconButton>
                </Box>
              </Box>
            </CardCover>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 1.5,

              padding: "10px 10px",
              borderRadius: "15px",
              border: "0.1px solid black",

              backgroundColor: "#fff",
            }}
          >
            <Avatar
              src="https://images.pexels.com/photos/9969230/pexels-photo-9969230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              size="lg"
              sx={{ "--Avatar-size": "3.5rem" }}
            />
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
                  National Park
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
                  12:10
                </Box>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Roboto , sans-serif",
                }}
              >
                what is life ?
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
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
