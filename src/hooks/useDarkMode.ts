import { useState } from "react";

const useDarkMode = () => {
  const [isThemeDark, setIsThemeDark] = useState(true);

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  return {
    isThemeDark,
    toggleTheme,
  };
};

export default useDarkMode;
