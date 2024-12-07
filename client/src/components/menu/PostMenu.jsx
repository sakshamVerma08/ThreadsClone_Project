import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMyMenu } from "../../redux/slice";
const PostMenu = () => {
  const { anchorE2 } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMyMenu(null));
  };
  const handleCopyLink = () => {
    // replace the post linke with the dynamic post link
    const postLink = "";

    navigator.clipboard
      .writeText(postLink)
      .then(() => {
        alert("Link Copied to Clipboard !");
      })
      .catch((err) => {
        console.error("Failed to copy the link ", err);
      });
  };
  const handleDeletePost = () => {};

  return (
    <>
      <Menu
        anchorEl={anchorE2}
        open={anchorE2 !== null ? true : false}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={handleCopyLink}>Copy Link</MenuItem>
        <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default PostMenu;
