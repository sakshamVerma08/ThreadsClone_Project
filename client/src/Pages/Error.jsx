import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Error = ({ setHeaderStatus }) => {
  setHeaderStatus("not visible");
  return (
    <>
      <Stack
        width={"100vw"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        sx={{}}
      >
        <Stack
          p={5}
          mt={15}
          flexDirection={"column"}
          alignItems={"center"}
          borderRadius={"10px"}
          gap={5}
        >
          <Typography variant="h2">Sorry, this page isn't available</Typography>
          <Typography variant="h4">
            The link you followed may be broken , or the page may have been
            removed.
          </Typography>
          <Link to="/">
            <Button
              href="/"
              size="large"
              sx={{
                p: 2,
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
