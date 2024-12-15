import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollTransform = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress (0 - 1)

  // Map scroll progress to new ranges
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]); // Scale from 1 to 2
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Fade out (1 to 0)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Rotate from 0 to 360°

  return (
    <div className="h-[200vh] flex justify-center items-center bg-gray-50">
      <motion.div
        style={{ scale, opacity, rotate }}
        className="w-[150px] h-[150px] bg-red-500 rounded-full"
      />
    </div>
  );
};

export default ScrollTransform;
