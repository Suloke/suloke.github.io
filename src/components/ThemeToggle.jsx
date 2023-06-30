import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };
  

  return (
    <div>
      <button className="ThemeToggle" onClick={onToggleTheme}>
        {theme === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </button>

    </div>
  );
};

export default ThemeToggle;
