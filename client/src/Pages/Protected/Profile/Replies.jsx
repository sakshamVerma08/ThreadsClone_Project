import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import Comments from "../../../components/Home/Post/Comments";
const Replies = () => {
  const _539 = useMediaQuery("(min-width:539px)");

  return (
    <>
      <Stack
        // bgcolor={"red"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        mx={"auto"}
        width={_539 ? "100%" : "95%"}
        gap={2}
      >
        <Comments />
      </Stack>
    </>
  );
};

export default Replies;
