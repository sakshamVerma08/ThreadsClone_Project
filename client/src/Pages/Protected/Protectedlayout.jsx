import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";
import { Stack, useMediaQuery } from "@mui/material";
const Protectedlayout = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      <Stack
        flexDirection={"column"}
        mx={"auto"}
        minWidth={"100%"}
        maxWidth={_700 ? "800px" : "90%"}
        overflow={"hidden"}
      >
        <Header />
        <Outlet />
      </Stack>
    </>
  );
};

export default Protectedlayout;
