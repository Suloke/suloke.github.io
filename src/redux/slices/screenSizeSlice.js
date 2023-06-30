import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState,
  reducers: {
    updateScreenSize: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { updateScreenSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
