import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLoginMutation, useSignUpMutation } from "../redux/service";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMyInfo } from "../redux/slice";

const Register = () => {
  const [signUpUser, signUpUserData] = useSignUpMutation();
  const [logIn, logInUserData] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.service.darkMode);

  // MEDIA QUERIES
  //******************** */
  const _700 = useMediaQuery("(min-width:700px)");

  /*********************************** */

  // State to track whether a user is logged in or not.
  const [login, setLogin] = useState(false);

  // userName, Email and password states, to keep updating the changing input field
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };

  /*const handleLogin = async () => {
    try {
      const data = { email, password };
      const response = await logIn(data).unwrap();
      console.log("response:", response);
      localStorage.setItem("token", response.token);
      dispatch(addMyInfo(response.user));
      // navigate("/");
    } catch (err) {
      console.log("Login Failed:", err);
    }
  };*/

  const handleLogin = async () => {
    try {
      const data = { email, password };
      const res = await logIn(data).unwrap();
      if (res.token) {
        localStorage.setItem("token", res.token);
        dispatch(addMyInfo(res.user));
        navigate("/");
      } else {
        console.error("Token is missing in the response");
      }
    } catch (err) {
      console.log("Login failed:", err);
    }
  };

  const handleRegister = async () => {
    try {
      const data = { userName, email, password };
      await signUpUser(data);
    } catch (err) {
      console.log("Sign Up error: ", err);
    }
  };

  useEffect(() => {
    if (signUpUserData.isSuccess) {
      console.log(signUpUserData.data);
    }
    if (logInUserData.isSuccess) {
      console.log(logInUserData.data);
    }
  }, [signUpUserData.isSuccess, logInUserData.isSuccess]);

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
              placeholder="Enter your userName..."
              onChange={(e) => {
                setuserName(e.target.value);
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
