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
    allPosts: [],
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
    addToAllPosts: (state, actions) => {
      const newPostArray = [...actions.payload.posts];
      if (state.allPosts.length === 0) {
        state.allPosts = newPostArray;
        return;
      }
      const existingPosts = [...state.allPosts];
      newPostArr.forEach((e) => {
        const existingIndex = existingPosts.findIndex((i) => {
          return i._id === e._id;
        });

        if (existingIndex !== -1) {
          existingPosts[existingIndex] = e;
        } else {
          existingPosts.push(e);
        }
      });

      state.allPosts = existingPosts;
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
  addToAllPosts,
} = serviceSlice.actions;

export default serviceSlice.reducer;
