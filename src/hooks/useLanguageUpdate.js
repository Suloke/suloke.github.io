import { useEffect } from "react";
import { useSelector } from "react-redux";
import i18n from "../utils/i18next";

const useLanguageUpdate = () => {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
};

export default useLanguageUpdate;
