import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Followbutton from "./Followbutton";

const Profilebar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        mx={"auto"}
        px={1}
        py={2}
        borderRadius={"15px"}
        width={"100%"}
        sx={{
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar sx={{ width: 47, height: 47 }} src="" alt="" />
          <Stack flexDirection={"column"} gap={1}>
            <Typography variant="h5" fontWeight={"bold"} fontSize={"1rem"}>
              Saksham Verma
            </Typography>
            <Typography variant="caption" fontSize={"1.1rem"} color="grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              odio.
            </Typography>

            <Typography variant="caption" fontSize={"1rem"}>
              10 Followers
            </Typography>
          </Stack>
        </Stack>

        {/* <Button
          
          variant="outlined"
          size="medium"
          sx={{
            border: "1px solid grey",
            zIndex: 1,
            color: "#000",
            borderRadius: "10px",
            p: 2,
            height: 40,
            ":hover": {
              color: "white",
            },
          }}
        >
          Follow
        </Button> */}
        <Followbutton />
      </Stack>
    </>
  );
};

export default Profilebar;
