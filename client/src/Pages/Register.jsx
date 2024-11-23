import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  // MEDIA QUERIES
  //******************** */
  const _700 = useMediaQuery("(min-width:700px)");

  /*********************************** */

  // State to track whether a user is logged in or not.
  const [login, setLogin] = useState(false);

  // Username, Email and password states, to keep updating the changing input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleLogin = () => {
    const data = { email, password };
    console.log(data);
  };

  const handleRegister = () => {
    const data = { username, email, password };
    console.log(data);
  };

  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={
          _700
            ? {
                background: "url('/register-bg.webp')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 400px",
              }
            : null
        }
      >
        <Stack
          flexDirection={"column"}
          width={_700 ? "40%" : "90%"}
          gap={2}
          mt={_700 ? 20 : 0}
        >
          <Typography
            variant="h5"
            fontSize={_700 ? "1.5rem" : "1rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            {login ? "Login with Email" : "Register with Email"}
          </Typography>

          {login ? null : (
            <TextField
              variant="outlined"
              placeholder="Enter your Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          )}

          <TextField
            variant="outlined"
            placeholder="Enter your Email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Enter your Password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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
            onClick={login ? handleLogin : handleRegister}
          >
            {login ? "Sign In" : "Sign Up"}
          </Button>
          <Typography
            variant="subtitle2"
            fontSize={_700 ? "1.5rem" : "1rem"}
            alignSelf={"center"}
          >
            {login ? "Don't have an account" : "Already have an account?"}
            <span className="login-link" onClick={toggleLogin}>
              {login ? "Sign Up " : " Login"}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
