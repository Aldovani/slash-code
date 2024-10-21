"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"div">;

export function RevealOnScroll({
  children,
  initial = {},
  whileInView,
  ...props
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
