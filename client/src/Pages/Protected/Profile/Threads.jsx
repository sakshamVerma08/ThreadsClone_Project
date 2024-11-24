import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import Post from "../../../components/Home/Post";
const Threads = () => {
  const _738 = useMediaQuery("(min-width:738)");
  const _539 = useMediaQuery("(min-width:539px)");

  return (
    <>
      <Stack
        
        flexDirection={"column"}
        mx={"auto"}
        alignItems={"center"}
        // bgcolor={"skyblue"}
        gap={2}
        minHeight={"70vh"}
        width={_738 ? "100%" : _539 ? "100%" : "95%"}
        mb={10}
      >
        <Post />
      </Stack>
    </>
  );
};

export default Threads;
