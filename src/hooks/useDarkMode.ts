import { useTheme } from "next-themes";

const useDarkMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useDarkMode;
