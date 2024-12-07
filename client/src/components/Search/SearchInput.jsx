import { Input, InputAdornment, TextField, useMediaQuery } from "@mui/material";
import { FaSearch } from "react-icons/fa";

import React from "react";
import { useSelector } from "react-redux";

const SearchInput = () => {
  const { darkMode } = useSelector((state) => state.service);

  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      {_700 ? (
        <>
          <TextField
            sx={{
              width: "80%",
              boxShadow: "5px 5px 5px grey",
              borderRadius: "15px",
              border: "1px solid #000",
              px: 2,
              py: 0.2,
              my: 5,
              mx: "auto",
              "& .MuiOutlinedInput-root": {
                color: darkMode ? "whitesmoke" : "black",
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            placeholder="Search"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment
                    color={darkMode ? "whitesmoke" : "black"}
                    position="start"
                  >
                    <FaSearch />
                  </InputAdornment>
                ),
              },
            }}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchInput;
