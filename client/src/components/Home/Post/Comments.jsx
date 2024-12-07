import React, { useEffect, useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { IoIosMore } from "react-icons/io";
import PostMenu from "../../menu/PostMenu";

const Comments = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const [anchorEl, setanchorEl] = useState(null);
  const handleClose = () => {
    setanchorEl(null);
  };

  const handleOpen = () => {
    setanchorEl(event.currentTarget);
  };

  const handleDeleteComment = () => {};
  return (
    <>
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
          <IoIosMore
            size={_700 ? 28 : 20}
            onClick={handleOpen}
            style={{ cursor: "pointer" }}
          />
        </Stack>
      </Stack>
      {/*Comment row ends*/}

      {anchorEl && (
        <Menu
          anchorEl={anchorEl}
          open={true}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default Comments;
