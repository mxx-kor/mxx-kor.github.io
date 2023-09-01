import useDarkMode from "@/hooks/useDarkMode";
import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>hi</div>;
  }

  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-gray"
      onClick={toggleTheme}
    >
      {theme}
    </button>
  );
};

export default ThemeSwitch;
