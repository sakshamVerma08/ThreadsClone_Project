import React from "react";
import { Stack } from "@mui/material";
import Post from "../../../components/Home/Post";
const Repost = () => {
  return (
    <>
      <Stack
        bgcolor={"red"}
        flexDirection={"column"}
        mx={"auto"}
        gap={2}
        width={"100%"}
        mb={10}
      >
        <Post />
        <Post />
      </Stack>
    </>
  );
};

export default Repost;
