import useDarkMode from "@/hooks/useDarkMode";
import React from "react";

const ThemeSwitch = () => {
  const { isThemeDark, toggleTheme } = useDarkMode();

  return (
    <button onClick={toggleTheme}>{isThemeDark ? "light" : "dark"}</button>
  );
};

export default ThemeSwitch;
