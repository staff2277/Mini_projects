import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const HoverBall = () => {
  // Motion values for tracking movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  // Extend movement range for ball and text
  const ballX = useTransform(x, [-100, 100], [-20, 20]); // Ball: Max 20px
  const ballY = useTransform(y, [-100, 100], [-20, 20]);
  const textX = useTransform(x, [-100, 100], [-30, 30]); // Text: Max 30px
  const textY = useTransform(y, [-100, 100], [-30, 30]);

  // Smooth reset with a "bouncier" snap-back on mouse leave
  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 10, restDelta: 0.001 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 10, restDelta: 0.001 });
    setIsHovered(false);
  };

  // Track mouse position relative to the ball
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Ball */}
      <motion.div
        className="relative w-[200px] h-[200px] rounded-full flex justify-center items-center"
        style={{
          x: ballX,
          y: ballY,
          backgroundColor: isHovered ? "#FF5733" : "#3498db", // Change color on hover
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 12, // Slightly bouncy transition
        }}
      >
        {/* Text that follows mouse */}
        <motion.span
          className="text-white text-2xl font-bold"
          style={{ x: textX, y: textY }}
          transition={{
            type: "spring",
            stiffness: 700, // More stiffness for text
            damping: 12, // Stronger bounce
          }}
        >
          Bounce Me!
        </motion.span>
      </motion.div>
    </div>
  );
};

export default HoverBall;
