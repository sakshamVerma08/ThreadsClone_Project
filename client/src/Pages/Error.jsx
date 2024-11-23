import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Error = ({ setHeaderStatus }) => {
  setHeaderStatus("not visible");
  const _700 = useMediaQuery("(min-width: 700px)");
  const _502 = useMediaQuery("(min-width:502px)");
  return (
    <>
      <Stack
        width={"100vw"}
        bgcolor="antiquewhite"
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        sx={{}}
      >
        <Stack
          p={_700 ? 5 : 3}
          mt={15}
          flexDirection={"column"}
          alignItems={"center"}
          borderRadius={"10px"}
          gap={5}
        >
          <Typography sx={{ fontSize: _700 ? "3vw" : "3.5vw" }} variant="h3">
            Sorry, this page isn't available
          </Typography>
          <Typography sx={{ fontSize: _700 ? "2vw" : "2.5vw" }} variant="h4">
            The link you followed may be broken , or the page may have been
            removed.
          </Typography>
          <Link to="/">
            <Button
              href="/"
              size={_700 ? "large" : "small"}
              sx={{
                fontSize: _700 ? "1.5vw" : "2vw",
                p: _700 ? 2 : 1.5,
                bgcolor: "blue",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Go Back to your Feed
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Error;
