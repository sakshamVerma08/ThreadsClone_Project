import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
    openEditProfileModal: false,
    anchorE1: null,
    anchorE2: null,
    darkMode: false,
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
    toggleColorMode: (state, actions) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  addPostModal,
  editProfileModal,
  toggleMainMenu,
  toggleMyMenu,
  toggleColorMode,
} = serviceSlice.actions;

export default serviceSlice.reducer;
