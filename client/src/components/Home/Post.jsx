import { Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMenu } from "react-icons/io";

import React, { useEffect, useState } from "react";
import PostOne from "./Post/PostOne";
import PostTwo from "./Post/PostTwo";
import { useDispatch, useSelector } from "react-redux";
import { addPostId, toggleMyMenu } from "../../redux/slice";

const Post = ({ e }) => {
  const { darkMode, myInfo } = useSelector((state) => state.service);

  const dispatch = useDispatch();

  const handleOpenMenu = (event) => {
    dispatch(addPostId(e._id));
    dispatch(toggleMyMenu(event.currentTarget));
  };

  const [isAdmin, setIsAdmin] = useState();
  const checkIsAdmin = () => {
    if (e?.admin._id === myInfo._id) {
      setIsAdmin(true);
    }
    setIsAdmin(false);
  };

  useEffect(() => {
    if (e && myInfo) {
      checkIsAdmin();
    }
  }, [e, myInfo]);

  const _300 = useMediaQuery("(min-width:300px)");
  const _340 = useMediaQuery("(min-width:340px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        //  bgcolor={"blue"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        p={_700 ? 2 : _400 ? 1 : "5px"}
        mx={"auto"}
        borderBottom={"2px solid grey"}
        width={_700 ? "70%" : _300 ? "90%" : "100%"}
        sx={{
          ":hover": {
            cursor: "pointer",
            boxShadow: _700 ? "10px 10px 10px grey" : "",
          },
          transition: "all ease-in-out 0.3s",
        }}
      >
        <Stack gap={_700 ? 2 : 1} flexDirection={"row"}>
          <PostOne e={e} />
          <PostTwo e={e} />
        </Stack>

        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          gap={1}
          height={"20vh"}
          width={"25vw"}
          fontSize={"1rem"}
          // bgcolor={"red"}
        >
          {_340 ? (
            <Typography
              variant={"caption"}
              color={darkMode ? "white" : "GrayText"}
              fontSize={"1rem"}
              // bgcolor={'red'}
              positionn={"relative"}
              top={2}
            >
              24h
            </Typography>
          ) : (
            ""
          )}

          {isAdmin ? (
            <IoIosMenu size={_700 ? 28 : 20} onClick={handleOpenMenu} />
          ) : (
            <IoIosMenu size={_700 ? 28 : 20}  />
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Post;
