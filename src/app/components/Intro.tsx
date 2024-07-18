import { motion } from "framer-motion";
import React from "react";

const DURATION = 0.25;
const DELAY = 0.025;

export default function IntroPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 w-screen h-screen bg-black"
    >
      <motion.span
        initial="initial"
        animate="animate"
        exit="exit"
        // transition={{ type: "spring", duration: 0.5, delay: 0.025 }}
        className="flex justify-center items-center h-full text-4xl lg:text-7xl font-extrabold text-white uppercase"
      >
        {typeof children === "string" &&
          children.split("").map((word, index) => (
            <motion.span
              variants={{
                initial: { y: -100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 100, opacity: 0 },
              }}
              transition={{
                duration: DURATION,
                delay: DELAY * index,
                ease: "circInOut",
              }}
              key={index}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
      </motion.span>
    </motion.div>
  );
}
