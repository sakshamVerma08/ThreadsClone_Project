import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { TfiArrowLeft } from "react-icons/tfi";

const Navbar = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _300 = useMediaQuery("(min-width:300px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        mt={3}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <TfiArrowLeft className="image-icon" size={_300 ? 32 : 24} />

        <Link to="/">
          <AiFillHome size={_300 ? 32 : 24} color={"#000"} />
        </Link>
        <Link to="/search">
          <IoSearch size={_300 ? 32 : 24} color={"#000"} />
        </Link>
        <Link to="/">
          {" "}
          <TbEdit size={_300 ? 32 : 24} color={"#000"} />
        </Link>
        <Link to="/">
          <FaHeart size={_300 ? 32 : 24} color={"#000"} />
        </Link>
        <Link to="/profile/threads/1">
          <CgProfile size={_300 ? 32 : 24} color={"#000"} />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
