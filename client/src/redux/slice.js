import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
    openEditProfileModal: false,
    anchorE1: null,
    anchorE2: null,
    darkMode: false,
    myInfo: null,
    user: {},
  },
  reducers: {
    addPostModal: (state, actions) => {
      state.openAddPostModal = actions.payload;
    },

    editProfileModal: (state, actions) => {
      state.openEditProfileModal = actions.payload;
    },
    toggleMainMenu: (state, actions) => {
      state.anchorE1 = actions.payload;
    },
    toggleMyMenu: (state, actions) => {
      state.anchorE2 = actions.payload;
    },
    toggleColorMode: (state) => {
      state.darkMode = !state.darkMode;
    },

    addMyInfo: (state, actions) => {
      state.myInfo = actions.payload;
    },

    addUser: (state, actions) => {
      state.user = actions.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const {
  addPostModal,
  editProfileModal,
  toggleMainMenu,
  toggleMyMenu,
  toggleColorMode,
  addMyInfo,
  addUser,
  clearUser,
} = serviceSlice.actions;

export default serviceSlice.reducer;
