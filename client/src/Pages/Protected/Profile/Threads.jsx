import React from "react";
import { Stack } from "@mui/material";
import Post from "../../../components/Home/Post";
const Threads = () => {
  return (
    <>
      <Stack
        flexDirection={"column"}
        mx={"auto"}
        gap={2}
        width={"100%"}
        mb={10}
      >
        <Post />
      </Stack>
    </>
  );
};

export default Threads;
