import React, { useEffect } from "react";
import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";

const Comments = () => {
  const _805 = useMediaQuery("(min-width:805px)");
  const _790 = useMediaQuery("(min-width:790px)");
  const _768 = useMediaQuery("(min-width:768px)");
  const _621 = useMediaQuery("(min-width:621px)");
  const _567 = useMediaQuery("(min-width:567px)");

  return (
    <>
      {" "}
      {/* Comment Row starts*/}
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        mx={"auto"}
        // bgcolor={"blue"}
        width={"50vw"}
        pb={4}
        px={2}
        borderBottom={"1px solid grey"}
      >
        <Stack flexDirection={"row"} pt={_790 ? 2 : 4} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize={_768 ? "1.3rem" : "1rem"}
            >
              Rishab
            </Typography>
            <Typography
              // bgcolor={"skyblue"}
              sx={{ width: "85%", marginTop: 3 }}
              variant="subtitle2"
              fontSize={
                _768 ? "0.9rem" : _621 ? "0.7rem" : _567 ? "0.6rem" : "10px"
              }
            >
              Congratulations on the Project Completion.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          color="grey"
          // bgcolor={"royalblue"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={2}
          fontSize={
            _768 ? "0.9rem" : _567 ? "0.7rem" : _621 ? "0.5rem" : "10px"
          }
        >
          <p>24 Minutes</p>
          <IoIosMore size={28} />
        </Stack>
      </Stack>
      {/*Comment row ends*/}
    </>
  );
};

export default Comments;
