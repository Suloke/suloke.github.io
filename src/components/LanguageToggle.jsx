import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/slices/languageSlice";

const LanguageToggle = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  const handleLanguageChange = (language) => {
    dispatch(changeLanguage(language));
  };

  return (
    <>
      <button
        onClick={() => handleLanguageChange("en")}
        disabled={currentLanguage === "en"}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange("es")}
        disabled={currentLanguage === "es"}
      >
        Español
      </button>
      <button
        onClick={() => handleLanguageChange("fr")}
        disabled={currentLanguage === "fr"}
      >
        Français
      </button>
    </>
  );
};

export default LanguageToggle;
