import { Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMenu } from "react-icons/io";

import React from "react";
import PostOne from "./Post/PostOne";
import PostTwo from "./Post/PostTwo";

const Post = () => {
  const _539 = useMediaQuery("(min-width:539px)");
  return (
    <>
      <Stack
        bgcolor={'blue'}
        flexDirection={"row"}
        justifyContent={"space-between"}
        p={2}
        mx={"auto"}
        borderBottom={"2px solid grey"}
        width="100%"
        sx={{
          ":hover": {
            cursor: "pointer",
            boxShadow: "10px 10px 10px grey",
          },
          transition: "all ease-in-out 0.3s",
        }}
      >
        <Stack gap={3} flexDirection={"row"}>
          <PostOne />
          <PostTwo />
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          gap={1}
          fontSize={"1rem"}
        >
          <Typography
            variant={"caption"}
            color={"GrayText"}
            fontSize={"1rem"}
            positionn={"relative"}
            top={2}
          >
            24h
          </Typography>
          <IoIosMenu size={28} />
        </Stack>
      </Stack>
    </>
  );
};

export default Post;
