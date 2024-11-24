import { Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const SuggestionsPrompt = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Typography fontSize={_700 ? "1rem" : "0.8rem"} color={"grey"}>
          Follow Suggestions
        </Typography>
      </Stack>
    </>
  );
};

export default SuggestionsPrompt;
