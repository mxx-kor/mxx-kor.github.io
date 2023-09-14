import useDarkMode from "@/hooks/useDarkMode";
import useMounted from "@/hooks/useMounted";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { FiMoon } from "@react-icons/all-files/fi/FiMoon";
import IconButton from "./base/IconButton";

const ThemeSwitch = () => {
  const { mounted } = useMounted();
  const { resolvedTheme, toggleTheme } = useDarkMode();

  if (!mounted) {
    return null;
  }

  return (
    <IconButton
      className="text-xl text-yellow-400 dark:text-yellow-300"
      onClick={toggleTheme}
      aria-label="Toggle Theme Button"
    >
      {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
    </IconButton>
  );
};

export default ThemeSwitch;
