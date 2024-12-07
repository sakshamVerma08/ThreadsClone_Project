import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import Post from "../../../components/Home/Post";
const Threads = () => {
  const _738 = useMediaQuery("(min-width:738)");
  const _700 = useMediaQuery("(min-width:700px)");
  const _539 = useMediaQuery("(min-width:539px)");

  return (
    <>
      <Stack
        position={"relative"}
        height={"100vh"}
        width={"50vw"}
        bgcolor={"skyblue"}
      >
        <Stack
          position={"absolute"}
          left={0}
          flexDirection={"column"}
          mx={"auto"}
          alignItems={"center"}
          gap={2}
          minHeight={"70vh"}
          width={"99%"}
          mb={10}
        >
          <Post />
        </Stack>
      </Stack>
    </>
  );
};

export default Threads;
