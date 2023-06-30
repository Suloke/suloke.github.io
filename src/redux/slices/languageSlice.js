import { createSlice } from "@reduxjs/toolkit";

const browserLanguage = navigator.language.split("-")[0]; // detect the browser language
const initialState = {
  language: browserLanguage || "en", // set the browser language as default, or "en" if it's not detected
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
