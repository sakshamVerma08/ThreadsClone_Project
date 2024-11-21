import { Stack } from "@mui/material";
import React from "react";
import Input from "../../components/Home/Input";
import Post from "../../components/Home/Post";

const Home = () => {
  return (
    <>
      <Input />
      <Stack gap={2} mb={10} flexDirection={"column"}>
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
    </>
  );
};

export default Home;
