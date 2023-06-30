import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/Layout";
import useLanguageUpdate from "./hooks/useLanguageUpdate";
import useScreenSize from "./hooks/useScreenSizeUpdate";
import useThemeUpdate from "./hooks/useThemeUpdate";

function App() {
  useLanguageUpdate();
  useScreenSize();
  useThemeUpdate();
  const screenSize = useSelector((state) => state.screenSize);

  return (
    //This is a sample of how you could use screen size state withing the app
    <div className={`App ${screenSize.width < 768 ? "mobile" : ""}`}>
      <Layout />
    </div>
  );
}

export default App;
