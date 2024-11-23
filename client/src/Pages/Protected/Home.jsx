import { Button, Stack } from "@mui/material";
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
      </Stack>
      <Button
        size="large"
        sx={{
          my: 5,
          p: 3,
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        LOAD MORE
      </Button>
    </>
  );
};

export default Home;
