import { Stack } from "@mui/material";
import { CiMenuFries } from "react-icons/ci";

import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        mt={2}
        mb={4}
        justifyContent={"space-around"}
        position={"sticky"}
        top={0}
        py={1}
        alignItems={"center"}
        height={52}
      >
        <img src="/threadsLogo.webp" alt="logo" width={60} height={52} />
        <Stack justifyContent={"center"} width={"550px"} zIndex={2} height={96}>
          <Navbar />
        </Stack>

        <CiMenuFries size={36} className="image-icon" />
      </Stack>
    </>
  );
};

export default Header;
