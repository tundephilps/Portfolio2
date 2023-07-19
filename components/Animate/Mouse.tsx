import { useRef } from "react";
import { motion } from "framer-motion";
import { Pointer } from "../Pointer";

export default function Mouse() {
  const ref = useRef(null);
  const { x, y } = Pointer(ref);

  return (
    <motion.div
      ref={ref}
      className="w-10 h-10 bg-yellow-500 rounded-full"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 10,
        restDelta: 0.001,
      }}
    />
  );
}
