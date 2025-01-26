import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "../../components/Home/Input";
import Post from "../../components/Home/Post";
import { useAllPostsQuery } from "../../redux/service";
import { useSelector } from "react-redux";
import Loading from "../../components/common/Loading";
const Home = () => {
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(true);
  const { data, isLoading } = useAllPostsQuery(page);
  const { allPosts } = useSelector((state) => state.service);

  const handleClick = () => {
    setPage((pre) => pre + 1);
  };

  useEffect(() => {
    if (data) {
      if (data.posts.length < 3) {
        setShowMore(false);
      }
    }
  }, [data]);

  return (
    <>
      <Input />
      <Stack gap={2} mb={10} flexDirection={"column"}>
        {allPosts ? (
          allPosts.length > 0 ? (
            allPosts.map((e) => {
              return <Post key={e._id} e={e} />;
            })
          ) : (
            <Typography variant={"caption"} textAlign={"center"}>
              No Posts Yet !
            </Typography>
          )
        ) : isLoading ? (
          <Loading />
        ) : null}
      </Stack>

      {showMore ? (
        <Button
          size="large"
          sx={{
            my: 5,
            p: 3,
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          LOAD MORE
        </Button>
      ) : (
        allPosts?.length > 0 && (
          <Typography variant={"h5"} textAlign={"center"} mb={5}>
            You have reached the End !
          </Typography>
        )
      )}
    </>
  );
};

export default Home;
