import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import languageReducer from "../slices/languageSlice";
import screenSizeReducer from "../slices/screenSizeSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  screenSize: screenSizeReducer,
});

export default rootReducer;
