import React from "react";
import { motion, MotionProps } from "framer-motion";

const button: MotionProps["variants"] = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const arrow: MotionProps["variants"] = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

interface RefreshProps {
  onClick: () => void;
}

export const Refresh: React.FC<RefreshProps> = ({ onClick }) => {
  return (
    <motion.div
      className="refresh"
      onClick={onClick}
      variants={button}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    ></motion.div>
  );
};
