import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="from fixed left-0 top-0 z-10 h-3 w-full origin-top-left bg-gradient-to-r from-stone-500 to-stone-700 dark:from-stone-700 dark:to-stone-200"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
