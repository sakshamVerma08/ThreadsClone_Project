import { Stack } from "@mui/material";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        mt={3}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link to="/">
          <AiFillHome size={32} color={"#000"} />
        </Link>
        <Link to="/search">
          <IoSearch size={32} color={"#000"} />
        </Link>
        <Link to="/">
          {" "}
          <TbEdit size={32} color={"#000"} />
        </Link>
        <Link to="/">
          <FaHeart size={32} color={"#000"} />
        </Link>
        <Link to="/profile/threads/1">
          <CgProfile size={32} color={"#000"} />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
