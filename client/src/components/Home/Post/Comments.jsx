import React, { useEffect } from "react";
import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";

const Comments = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      {" "}
      {/* Comment Row starts*/}
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        mx={"auto"}
        bgcolor={"blue"}
        width={"50vw"}
        pb={4}
        px={2}
        borderBottom={"1px solid grey"}
      >
        <Stack flexDirection={"row"} pt={2} gap={_700 ? 2 : 1}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography variant="h3" fontWeight="bold" fontSize={"1.3rem"}>
              Rishab
            </Typography>
            <Typography
              sx={{ width: "100%", marginTop: 3 }}
              variant="subtitle2"
              fontSize={"0.9rem"}
            >
              Congratulations on the Project Completion.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          color="grey"
          height={"50%"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={2}
          fontSize={"0.9rem"}
        >
          <p>24 Minutes</p>
          <IoIosMore size={_700 ? 28 : 20} />
        </Stack>
      </Stack>
      {/*Comment row ends*/}
    </>
  );
};

export default Comments;
