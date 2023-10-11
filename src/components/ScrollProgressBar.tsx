import { motion, useScroll } from "framer-motion";

import { cn } from "@/libs/core";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed left-0 top-0 z-10 h-1.5 w-full",
        "origin-top-left bg-gradient-to-r from-blue-400 to-sky-600 dark:from-stone-700 dark:to-stone-200",
      )}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
