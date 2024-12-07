import { useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Followbutton = () => {
  const { darkMode } = useSelector((state) => state.service);
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <button className={darkMode ? "followButtonDark" : "followButton"}>
        <span>FOLLOW</span>
      </button>
    </>
  );
};

export default Followbutton;
