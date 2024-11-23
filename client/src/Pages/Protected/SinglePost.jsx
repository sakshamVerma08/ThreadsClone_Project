import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Post from "../../components/Home/Post";
import Comments from "../../components/Home/Post/Comments";
const SinglePost = () => {
  const [comment, setComment] = useState("");

  return (
    <>
      <Stack flexDirection={"column"} gap={2} my={5}>
        <Post />
        <Stack flexDirection={"column"} width={"80%"} mx={"auto"} gap={2}>
          <Comments />
        </Stack>
        <TextField
          variant="outlined"
          autoFocus
          placeholder="Comment here .."
          id="Comment"
          sx={{ width: "50%", mx: "auto", my: 5, p: 1 }}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </Stack>
    </>
  );
};

export default SinglePost;
