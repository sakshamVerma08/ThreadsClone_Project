import { Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import React from "react";

const PostTwo = () => {
  const _973 = useMediaQuery("(min-width:973px)");
  const _872 = useMediaQuery("(min-width:872px)");
  const _682 = useMediaQuery("(min-width:682px)");
  return (
    <>
      <Stack
        flexDirection={"column"}
        justifyContent={"space-between"}
        // bgcolor={"green"}
        gap={_682 ? 0 : 1}
        width={_682 ? "90%" : "50%"}
      >
        <Stack
          flexDirection={"column"}
          // bgcolor={"pink"}
          gap={2}
          width={_682 ? "90%" : "80%"}
          height={_682 ? "auto" : "90%"}
        >
          {/* Post Title and description 'stack' starts here*/}
          <Stack flexDirection={"column"}>
            <Typography fontSize={"1.1rem"} fontWeight={500}>
              Saksham Verma
            </Typography>
            <Typography fontWeight={400}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              tempore.
            </Typography>
          </Stack>

          {/* Post title and description 'stack' ends here*/}
          <img
            src="/error-bg.png"
            alt="Post Image"
            width={_973 ? "380px" : _872 ? "350px" : _682 ? "" : "66%"}
            height={_682 ? "100%" : "auto"}
          />
        </Stack>
        {/* Like / share icons 'stack' starts here*/}
        <Stack flexDirection={"column"} gap={1} pt={3}>
          <Stack flexDirection={"row"} gap={4} m={1}>
            <FaRegHeart size={32} />
            <FaRegComment size={32} />
            <FaRetweet size={32} />
            <IoMdSend size={32} />
          </Stack>
          <Stack
            flexDirection={"row"}
            gap={2}
            position={"relative"}
            top={-3}
            left={4}
          >
            <Typography variant="caption" fontSize={"1.1rem"} color="GrayText">
              2 Likes.
            </Typography>
            <Typography variant="caption" fontSize={"1.1rem"} color="GrayText">
              1 Comment.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
