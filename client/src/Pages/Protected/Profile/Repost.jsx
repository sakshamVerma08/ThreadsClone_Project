import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import Post from "../../../components/Home/Post";
const Repost = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        // bgcolor={"red"}
        flexDirection={"column"}
        mx={"auto"}
        gap={2}
        width={_700 ? "800px" : "90%"}
        mb={10}
      >
        <Post />
        <Post />
      </Stack>
    </>
  );
};

export default Repost;
