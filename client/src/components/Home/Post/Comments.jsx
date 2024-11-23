import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { IoIosMore } from "react-icons/io";

const Comments = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        mx={"auto"}
        width={"90%"}
        pb={4}
        px={2}
        borderBottom={"1px solid grey"}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography variant="h5" fontWeight="bold" fontSize={"1rem"}>
              Rishab
            </Typography>
            <Typography variant="subtitle2" fontSize={"0.9rem"}>
              Congratulations on the Project Completion.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          color="grey"
          flexDirection={"row"}
          alignItems={"center"}
          gap={2}
          fontSize={"0.9rem"}
        >
          <p>24 Minutes</p>
          <IoIosMore size={28} />
        </Stack>
      </Stack>
    </>
  );
};

export default Comments;
