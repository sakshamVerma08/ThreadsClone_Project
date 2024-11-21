import React from "react";
import { Stack, CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <>
      <Stack
        minHeight={"50vh"}
        flexDirection={"row"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        my={5}
      >
        <CircularProgress />
      </Stack>
    </>
  );
};

export default Loading;
