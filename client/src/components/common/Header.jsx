import { Grid, Grid2, Stack, useMediaQuery } from "@mui/material";
import { CiMenuFries } from "react-icons/ci";

import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _425 = useMediaQuery("(min-width:425px)");
  return (
    <>
      {_700 ? (
        <Stack
          bgcolor={"red"}
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
          <Stack
            justifyContent={"center"}
            width={"550px"}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>

          <CiMenuFries size={36} className="image-icon" color={"grey"} />
        </Stack>
      ) : (
        <>
          <Stack
            position={"fixed"}
            flexDirection={"row"}
            justifyContent={"center"}
            bgcolor={"aliceblue"}
            b={0}
            height={52}
            p={1}
            zIndex={2}
          ></Stack>
          <Grid2
            container
            // bgcolor={"red"}
            height={60}
            justifyContent={"space-around"}
            gap={5}
            alignItems={"center"}
            p={1}
          >
            <div></div>
            <Grid2 item xs={6}>
              <img
                src="/Threads-logo-white-bg.png"
                alt="logo"
                height={35}
                width={60}  
              />
            </Grid2>
            <CiMenuFries size={36} className="image-icon" color={"grey"} />
          </Grid2>
        </>
      )}
    </>
  );
};

export default Header;
