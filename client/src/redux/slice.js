import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
  },
  reducers: {
    addPostModal: (state, actions) => {
      state.openAddPostModal = actions.payload;
    },
  },
});

export const { addPostModal } = serviceSlice.actions;

export default serviceSlice.reducer;
