import { Input, InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";

import React from "react";

const SearchInput = () => {
  return (
    <>
      <TextField
        sx={{
          width: "100%",
          maxWidth: "750px",
          boxShadow: "5px 5px 5px grey",
          borderRadius: "15px",
          border: "1px solid #000",
          px: 2,
          py: 1,
          my: 5,
          mx: "auto",
          "& .MuiOutlinedInput-root": {
            color: "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="Search"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};

export default SearchInput;
