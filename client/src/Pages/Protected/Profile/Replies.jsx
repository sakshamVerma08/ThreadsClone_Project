import React from "react";
import { Stack } from "@mui/material";
import Comments from "../../../components/Home/Post/Comments";
const Replies = () => {
  return (
    <>
      <Stack flexDirection={"column"} mx={"auto"} width={"800px"} gap={2}>
        <Comments />
      </Stack>
    </>
  );
};

export default Replies;
