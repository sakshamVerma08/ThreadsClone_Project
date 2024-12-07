import { Menu, MenuItem } from "@mui/material";
import React from "react";

const PostMenu = () => {
  const handleClose = () => {};
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

    const handleDeletePost = () => {};
  };
  return (
    <>
      <Menu
        // anchorEl={null}
        open={true}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MenuItem onClick={handleCopyLink}>Copy Link</MenuItem>
        <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default PostMenu;
