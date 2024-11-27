import { Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMenu } from "react-icons/io";

import React from "react";
import PostOne from "./Post/PostOne";
import PostTwo from "./Post/PostTwo";

const Post = () => {
  const _340 = useMediaQuery("(min-width:340px)");
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        // bgcolor={"blue"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        p={_700 ? 2 : _400 ? 1 : "5px"}
        mx={"auto"}
        borderBottom={"2px solid grey"}
        width={_700 ? "70%" : _300 ? "90%" : "100%"}
        sx={{
          ":hover": {
            cursor: "pointer",
            boxShadow: _700 ? "10px 10px 10px grey" : "",
          },
          transition: "all ease-in-out 0.3s",
        }}
      >
        <Stack gap={_700 ? 2 : 1} flexDirection={"row"}>
          <PostOne />
          <PostTwo />
        </Stack>

        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          gap={1}
          height={"20vh"}
          width={"25vw"}
          fontSize={"1rem"}
          bgcolor={"red"}
        >
          {_340 ? (
            <Typography
              variant={"caption"}
              color={"GrayText"}
              fontSize={"1rem"}
              // bgcolor={'red'}
              positionn={"relative"}
              top={2}
            >
              24h
            </Typography>
          ) : (
            ""
          )}
          <IoIosMenu size={_700 ? 28 : 20} />
        </Stack>
      </Stack>
    </>
  );
};

export default Post;
