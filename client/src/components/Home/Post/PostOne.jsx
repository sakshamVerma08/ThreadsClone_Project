import { Avatar, AvatarGroup, Badge, Stack, Stepper } from "@mui/material";
import React from "react";

const PostOne = () => {
  return (
    <>
      <Stack
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // bgcolor={"pink"}
        ml={0}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar
              alt="+"
              src=""
              sx={{
                height: 20,
                width: 20,
                position: "relative",
                right: 4,
                bottom: 4,
                top: 2,
              }}
            >
              +
            </Avatar>
          }
        >
          <Avatar alt="SV" src="" sx={{ width: 40, height: 40 }} />
        </Badge>

        {/* Long line in Post */}
        <Stack
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
          height={"100%"}
        >
          <Stepper
            orientation={"vertical"}
            activeStep={0}
            sx={{ width: "0px", height: "100%", border: "0.1rem solid grey" }}
          ></Stepper>
          {/* Profile symbols at bottom of post*/}
          <AvatarGroup
            total={3}
            sx={{
              "& .MuiAvatar-root": {
                width: 24,
                height: 24,
                fontSize: 12,
              },
            }}
          >
            <Avatar src="" alt=""></Avatar>
          </AvatarGroup>
          {/* end of profile symbols*/}
        </Stack>
      </Stack>
    </>
  );
};

export default PostOne;
