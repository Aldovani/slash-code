"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type RankCardProps = {
  className?: string;
  children: ReactNode;
} & HTMLMotionProps<"div">;

export function RankCard({ className, children, ...props }: RankCardProps) {
  return (
    <motion.div
      {...props}
      className={` bg-white w-full sm:max-w-[360px] shadow-2xl shadow-slate-300  ${className}`}
    >
      <ul className="flex flex-col gap-2 px-2  w-full  sm:px-6 border border-slate-200 rounded-lg py-5">
        {children}
      </ul>
    </motion.div>
  );
}
