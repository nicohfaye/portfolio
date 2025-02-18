"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimateNumProps {
  target: number;
  duration: number;
  text: string;
}

const AnimateNum = ({ target, duration, text }: AnimateNumProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    animate(count, target, {
      duration: duration,
      ease: "easeOut",
    });
  }, [count, target, duration]);
  return (
    <div className="flex flex-col justify-start gap-y-2">
      <motion.h1 className="inline-flex text-test  font-medium text-6xl">
        {rounded}
      </motion.h1>
      <motion.p
        className="text-test-foreground font-medium text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default AnimateNum;
