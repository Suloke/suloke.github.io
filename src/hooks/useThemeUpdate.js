import { useEffect } from "react";
import { useSelector } from "react-redux";

const useThemeUpdate = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);
};

export default useThemeUpdate;
