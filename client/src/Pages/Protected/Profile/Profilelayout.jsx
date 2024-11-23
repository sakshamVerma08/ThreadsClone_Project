import { Avatar, AvatarGroup, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import Threads from "./Threads";
import Replies from "./Replies";
import Repost from "./Repost";

const Profilelayout = () => {
  return (
    <div id="profileContainer">
      <Stack
        //  bgcolor={"red"}
        minHeight={"10vh"}
        p={3}
        flexDirection={"column"}
        gap={3}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Stack
          id="firstRow"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          // bgcolor="purple"
          width={"100%"}
        >
          <Stack flexDirection={"column"} fontWeight={500} gap={1}>
            <h1>Saksham Verma</h1>
            <span>sakshamxx2769</span>
          </Stack>

          <Avatar sx={{ scale: 2 }} />
        </Stack>
        {/* first row ends*/}

        {/*Stack for Bio*/}
        <Stack flexDirection={"row"} width={"100%"} p={1}>
          <Stack flexDirection={"column"}>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </Stack>
        </Stack>
        {/*Stack for Bio Ends*/}
        <Stack
          id="secondRow"
          flexDirection={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
            <AvatarGroup max={2} bgcolor="green">
              <Avatar sx={{ width: 20, height: 20 }} src="" alt="" />
              <Avatar sx={{ width: 20, height: 20 }} src="" alt="" />
            </AvatarGroup>

            <Typography variant="subtitle2" fontSize={"1vw"} color="grey">
              19 followers
            </Typography>
          </Stack>

          <Stack
            //bgcolor="maroon"
            flexDirection={"row"}
            gap={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <CgInsights size={35} />
            <FaInstagram size={35} />
          </Stack>
        </Stack>
        {/*second row ends*/}
        <Stack id="thirdRow" width={"100%"}>
          <Button
            size="large"
            sx={{
              backgroundColor: "#fff",
              width: "100%",
              borderRadius: "12px",
              border: "1px solid grey",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "antiquewhite",
              },
            }}
            mx={"auto"}
            color="#000"
            variant="outlined"
          >
            Edit profile
          </Button>
        </Stack>
        {/* Third Row Ends*/}
        <Stack
          id="fourthRow"
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
          my={5}
          pb={2}
          fontSize={"1.2rem"}
          mx={"auto"}
          width={"100%"}
          sx={{ borderBottom: "2px solid #000" }}
        >
          <Link className="link" to="/profile/threads/1">
            Threads
          </Link>
          <Link className="link" to="/profile/replies/1">
            Replies
          </Link>
          <Link className="link" to="/profile/repost/1">
            Repost
          </Link>
        </Stack>
      </Stack>
      <Outlet />
    </div>
  );
};

export default Profilelayout;
