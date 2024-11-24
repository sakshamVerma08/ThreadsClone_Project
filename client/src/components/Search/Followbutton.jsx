import { useMediaQuery } from "@mui/material";
import React from "react";

const Followbutton = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <button className="followButton">
        <span>FOLLOW</span>
      </button>
    </>
  );
};

export default Followbutton;
