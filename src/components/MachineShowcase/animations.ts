import { Transition, Variants } from "framer-motion";

export const cardTransition: Transition = {
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1],
};

export const hoverOverlayVariants: Variants = {
  default: {
    opacity: 0.4,
  },
  hovered: {
    opacity: 0.65,
  },
};

export const footerContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
