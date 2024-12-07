import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { TfiArrowLeft } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { addPostModal } from "../../redux/slice";
/* IN THIS , AFTER THE _539 MEDIA QUERY, SHOW A BURGER ICON , WHEN CLICKED ON IT, A SIDE MENU SHOULD POP UP, LOOK HOW TO MAKE THIS FROM YOUTUBE
 */

const Navbar = () => {
  const { darkMode } = useSelector((state) => state.service);
  const _700 = useMediaQuery("(min-width:700px)");
  const _539 = useMediaQuery("(min-width:539px)");
  const _300 = useMediaQuery("(min-width:300px)");
  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(addPostModal(true));
  };

  return (
    <>
      {_539 ? (
        <Stack
          flexDirection={"row"}
          mt={3}
          maxWidth={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <TfiArrowLeft
            className="image-icon"
            size={_300 ? 32 : 20}
            color={darkMode ? "white" : "black"}
          />

          <Link to="/">
            <AiFillHome
              size={_300 ? 32 : 24}
              color={darkMode ? "white" : "black"}
            />
          </Link>
          <Link to="/search">
            <IoSearch
              size={_300 ? 32 : 24}
              color={darkMode ? "white" : "black"}
            />
          </Link>
          <Link to="/">
            {" "}
            <TbEdit
              size={_300 ? 32 : 24}
              color={darkMode ? "white" : "black"}
              onClick={handleAddPost}
            />
          </Link>
          <Link to="/">
            <FaHeart
              size={_300 ? 32 : 24}
              color={darkMode ? "white" : "black"}
            />
          </Link>
          <Link to="/profile/threads/1">
            <CgProfile
              size={_300 ? 32 : 24}
              color={darkMode ? "white" : "black"}
            />
          </Link>
        </Stack>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
