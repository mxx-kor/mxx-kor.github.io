import { useTheme } from "next-themes";

const useDarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return {
    resolvedTheme,
    toggleTheme,
  };
};

export default useDarkMode;
