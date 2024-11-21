import { Avatar, Button, Stack, Typography } from "@mui/material";
import { GoKebabHorizontal } from "react-icons/go";

import React from "react";
import SearchInput from "../../components/Search/SearchInput";
import Suggestion from "../../components/Search/Profilebar";
import SuggestionsPrompt from "../../components/Search/SuggestionsPrompt";
import Profilebar from "../../components/Search/Profilebar";

const Search = () => {
  return (
    <>
      <Stack flexDirection={"column"} alignItems={"center"} width={"100%"}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"50%"}
        >
          <Typography></Typography>
          <Typography>Search</Typography>
          <Button>
            <Avatar size={32} sx={{ bgcolor: "#181818" }}>
              <GoKebabHorizontal />
            </Avatar>
          </Button>
        </Stack>

        <Stack
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          // bgcolor="#F5F5DC"
          width={"55%"}
          sx={{
            border: "1.5px solid grey",
            borderRadius: "50px",
          }}
          ml={20}
          mr={20}
          mt={5}
        >
          <Stack width={"95%"}>
            <SearchInput />
          </Stack>

          <Stack width={"80%"} sx={{ my: 1.1 }}>
            <SuggestionsPrompt />
          </Stack>

          <Stack width={"100%"} sx={{ my: 1.1, px: 3 }}>
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Search;
