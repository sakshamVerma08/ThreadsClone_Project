import {
  Avatar,
  AvatarGroup,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { Link, Outlet, useMatch } from "react-router-dom";
import Threads from "./Threads";
import Replies from "./Replies";
import Repost from "./Repost";

const Profilelayout = () => {
  const _768 = useMediaQuery("(min-width:768)");
  const _615 = useMediaQuery("(min-width:615px)");
  const _300 = useMediaQuery("(min-width:300px)");
  return (
    <div id="profileContainer">
      <Stack
        bgcolor={"antiquewhite"}
        minHeight={"10vh"}
        p={3}
        flexDirection={"column"}
        gap={3}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        {/*first row starts*/}
        <Stack
          id="firstRow"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Stack
            flexDirection={"column"}
            fontWeight={500}
            sx={{ marginRight: _615 ? "" : "20px" }}
            gap={1}
          >
            {_768 ? <h1>Saksham Verma</h1> : <h2>Saksham Verma</h2>}
            <span>sakshamxx2769</span>
          </Stack>

          <Avatar sx={{ scale: _768 ? 2 : 1.5 }} />
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
            flexDirection={"row"}
            gap={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
          bgcolor={"red"}
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
