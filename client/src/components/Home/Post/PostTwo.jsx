import { Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";

const PostTwo = () => {
  /* video defined break points */
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _801 = useMediaQuery("(min-width: 801px )");
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      <Stack
        flexDirection={"column"}
        justifyContent={"space-between"}
        // bgcolor={"green"}
        gap={1}
        width={"90%"}
      >
        <Stack
          flexDirection={"column"}
          // bgcolor={"pink"}
          gap={2}
          width={"90%"}
          height={"90%"}
        >
          {/* Post Title and description 'stack' starts here*/}
          <Stack flexDirection={"column"}>
            <Typography fontSize={_300 ? "1rem" : "0.8rem"} fontWeight={500}>
              Saksham Verma
            </Typography>

            <Link to="/post/2" className="link">
              <Typography
                fontWeight={
                  _700 ? "1.2rem" : _400 ? "1rem" : _300 ? "0.9rem" : "0.8rem"
                }
              >
                Open Post from Here !
              </Typography>
            </Link>
          </Stack>

          {/* Post title and description 'stack' ends here*/}
          <img
            src="/error-bg.png"
            alt="Post Image"
            width={
              _801
                ? "450px"
                : _700
                ? "400px"
                : _500
                ? "350px"
                : _400
                ? "250px"
                : _300
                ? "180px"
                : "150px"
            }
            height={"auto"}
          />
        </Stack>
        {/* Like / share icons 'stack' starts here*/}
        <Stack flexDirection={"column"} gap={1} pt={3}>
          <Stack flexDirection={"row"} gap={4} m={1}>
            <FaRegHeart size={_700 ? 32 : _300 ? 28 : 24} />
            <FaRegComment size={_700 ? 32 : _300 ? 28 : 24} />
            <FaRetweet size={_700 ? 32 : _300 ? 28 : 24} />
            <IoMdSend size={_700 ? 32 : _300 ? 28 : 24} />
          </Stack>
          <Stack
            flexDirection={"row"}
            gap={2}
            position={"relative"}
            top={-3}
            left={4}
          >
            <Typography
              variant="caption"
              fontSize={_700 ? "1.1rem" : "1rem"}
              color="GrayText"
            >
              2 Likes.
            </Typography>
            <Typography
              variant="caption"
              fontSize={_700 ? "1.1rem" : "1rem"}
              color="GrayText"
            >
              1 Comment.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
