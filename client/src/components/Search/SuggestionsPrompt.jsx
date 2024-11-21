import { Stack, Typography } from "@mui/material";
import React from "react";

const SuggestionsPrompt = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Typography color={"grey"}>Follow Suggestions</Typography>
      </Stack>
    </>
  );
};

export default SuggestionsPrompt;
