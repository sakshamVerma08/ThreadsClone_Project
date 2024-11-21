import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: "url('/register-bg.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 400px",
        }}
      >
        <Stack flexDirection={"column"} width={"40%"} gap={2} mt={20}>
          <Typography
            variant="h5"
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            Register with Email
          </Typography>
          <TextField variant="outlined" placeholder="Enter your Username..." />
          <TextField variant="outlined" placeholder="Enter your Email..." />
          <TextField variant="outlined" placeholder="Enter your Password..." />
          <Button
            size={"large"}
            sx={{
              backgroundColor: "green",
              height: 52,
              color: "white",
              fontSize: "1rem",
              ":hover": {
                transition: "ease-out 0.2s",
                transform: "scale(1.1)",
              },
            }}
          >
            SIGN UP
          </Button>
          <Typography
            variant="subtitle2"
            fontSize="1.5rem"
            alignSelf={"center"}
          >
            Already have an account? <span className="login-link">Log In</span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
