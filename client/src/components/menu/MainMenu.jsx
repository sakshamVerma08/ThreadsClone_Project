import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMyInfo, toggleColorMode, toggleMainMenu } from "../../redux/slice";
import { useLogoutMeMutation } from "../../redux/service";
const MainMenu = () => {
  const { anchorE1 } = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const [logoutMe, logoutMeData] = useLogoutMeMutation();
  // logoutMe is a function inside of which we can send data and logoutMeData is the data of the response.
  const handleClose = () => {
    dispatch(toggleMainMenu(null));
  };

  const handleToggleTheme = () => {
    handleClose();
    dispatch(toggleColorMode());
  };
  const handleLogout = async () => {
    handleClose();
    await logoutMe();
  };

  useEffect(() => {
    if (logoutMeData.isSuccess) {
      dispatch(addMyInfo(null));
      console.log(logoutMeData.data);
      window.location.reload();
    }
  }, [logoutMeData.isSuccess]);
  return (
    <>
      <Menu
        anchorEl={anchorE1}
        open={anchorE1 !== null ? true : false}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
        <Link className="link" to="/profile/threads/2">
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MainMenu;
