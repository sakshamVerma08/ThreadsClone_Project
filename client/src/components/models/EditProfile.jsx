import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { editProfileModal } from "../../redux/slice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { openEditProfileModal,darkMode} = useSelector((state) => state.service);
  const [pic, setPic] = useState();
  const [bio, setBio] = useState();
  const imageRef = useRef();

  const _700 = useMediaQuery("(min-width:700px)");
  const handleClose = () => {
    dispatch(editProfileModal(false));
  };

  const handlePhoto = () => {
    imageRef.current.click();
  };

  const handleUpdate = () => {};

  return (
    <>
      <Dialog
        open={openEditProfileModal}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
          <RxCross2 size={28} className="image-icon" />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          Edit Profile
        </DialogTitle>
        <DialogContent>
          {/*Stack 1 **********/}
          <Stack flexDirection={"column"} gap={1}>
            <Avatar
              sx={{ width: 96, height: 96, alignSelf: "center" }}
              src={pic ? URL.createObjectURL(pic) : ""}
              alt=""
            />
            <Button
              size="large"
              sx={{
                border: "2px solid grey",
                borderRadius: "10px",
                width: 96,
                height: 40,
                alignSelf: "center",
                my: 2,
                ":hover": { cursor: "pointer" },
              }}
              onClick={handlePhoto}
            >
              Change
            </Button>
            <input
              type="file"
              className="file-input"
              ref={imageRef}
              onChange={(e) => {
                setPic(e.target.files[0]);
              }}
              accept="image/*"
            />
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              Username
            </Typography>
            <input
              type="text"
              value={"Saksham Verma"}
              readOnly
              className="text-1"
            />
          </Stack>
          {/* *****************Stack 2 *****************/}
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              Username
            </Typography>
            <input
              type="email"
              value={"Saksham Verma"}
              readOnly
              className="text-1"
            />
          </Stack>
          {/* **************** Stack 3 *****************/}
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              Username
            </Typography>
            <input
              type="bio"
              placeholder="Biography"
              className="text-1"
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </Stack>

          <Button
            size="large"
            sx={{
              border: "2px solid grey",
              borderRadius: "10px",
              bgcolor: "GrayText",
              color: "white",
              width: "100%",
              my: 2,
              fontSize: "1.2rem",
              ":hover": {
                cursor: "pointer",
                bgcolor: "grey",
              },
            }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfile;
