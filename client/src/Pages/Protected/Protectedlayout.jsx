import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";
import { Stack } from "@mui/material";
const Protectedlayout = () => {
  return (
    <>
      <Stack
        flexDirection={"column"}
        mx={"auto"}
        minWidth={"100%"}
        maxWidth={"800px"}
        overflow={"hidden"}
      >
        <Header />
        <Outlet />
      </Stack>
    </>
  );
};

export default Protectedlayout;
