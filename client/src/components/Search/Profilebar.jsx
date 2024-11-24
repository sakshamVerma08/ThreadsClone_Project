import {
  Avatar,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Followbutton from "./Followbutton";

const Profilebar = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      <Stack
        flexDirection={"row"}
        // bgcolor={"antiquewhite"}
        justifyContent={"space-between"}
        mx={"auto"}
        px={1}
        py={2}
        borderRadius={"15px"}
        width={"100%"}
        sx={{
          m: 2,
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Stack flexDirection={"row"} width={_700 ? "80%" : "90%"} gap={2}>
          <Avatar sx={{ width: 47, height: 47 }} src="" alt="" />
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              fontSize={_700 ? "1rem" : "0.8rem"}
            >
              Saksham Verma
            </Typography>
            <Typography
              variant="caption"
              // bgcolor={"skyblue"}
              fontSize={_700 ? "1.1rem" : "0.75rem"}
              color="grey"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              odio.
            </Typography>

            <Typography variant="caption" fontSize={_700 ? "1rem" : "0.9rem"}>
              10 Followers
            </Typography>
          </Stack>
        </Stack>
        <Followbutton />
      </Stack>
    </>
  );
};

export default Profilebar;
