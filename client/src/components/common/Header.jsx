import { Grid, Grid2, Stack, useMediaQuery } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";

import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainMenu } from "../../redux/slice";
const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.service);

  const handleOpenMenu = (event) => {
    dispatch(toggleMainMenu(event.currentTarget));
  };

  const _700 = useMediaQuery("(min-width:700px)");
  const _425 = useMediaQuery("(min-width:425px)");
  return (
    <>
      {_700 ? (
        <Stack
          // bgcolor={"red"}
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
          {darkMode ? (
            <img src="/threadsLogo.webp" alt="logo" width={60} height={52} />
          ) : (
            <img
              src="/Threads-logo-white-bg.png"
              alt="logo"
              width={89}
              height={52}
            />
          )}
          <Stack
            justifyContent={"center"}
            width={"550px"}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>

          {/* <CiMenuFries size={36} className="image-icon" color={"grey"} /> */}
          <CiMenuBurger
            size={36}
            className="image-icon"
            color={"grey"}
            onClick={handleOpenMenu}
          />
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
          >
            <Navbar />
          </Stack>
          <Grid2
            container
            // bgcolor={"red"}
            height={60}
            justifyContent={"space-around"}
            gap={5}
            alignItems={"center"}
            p={1}
          >
            <div></div>{" "}
            <Grid2 xs={6}>
              <img
                src="/Threads-logo-white-bg.png"
                alt="logo"
                height={35}
                width={60}
              />
            </Grid2>
            <CiMenuFries
              size={36}
              className="image-icon"
              color={"grey"}
              onClick={handleOpenMenu}
            />
          </Grid2>
        </>
      )}
    </>
  );
};

export default Header;
