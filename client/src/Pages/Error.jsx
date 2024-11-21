import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Error = ({ setHeaderStatus }) => {
  setHeaderStatus("not visible");
  return (
    <>
      <Stack
        width={"100vw"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "rgb(32, 42, 43)",
          
        }}
      >
        <Stack
          p={5}
          flexDirection={"column"}
          bgcolor={"wheat"}
          alignItems={"center"}
          borderRadius={"10px"}
          boxShadow={"7px 7px 7px white"}
          gap={2}
        >
          <Typography variant="h3">OOP's</Typography>
          <Typography variant="h3">You entered the wrong path!</Typography>
          <Button
            size="large"
            sx={{ p: 2, bgcolor: "blue", color: "white", borderRadius: "10px" }}
          >
            Go Back
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Error;
