import { Variants } from "framer-motion";

export const staggerChild: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0.3,
    transition: { duration: 0.3 },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3 },
    willChange: "opacity",
  },
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.6 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
