import { cn } from "@/libs/core";
import { m, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <m.div
      className={cn(
        "fixed left-0 top-0 z-10 h-1.5 w-full",
        "origin-top-left bg-gradient-to-r from-blue-400 to-sky-600 dark:from-stone-700 dark:to-stone-200",
      )}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
