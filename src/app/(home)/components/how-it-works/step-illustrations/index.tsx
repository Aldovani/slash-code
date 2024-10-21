import { AnimatePresence, motion, Variants, cubicBezier } from "framer-motion";
import { Browser } from "../../browser";
import { ReactNode } from "react";

type StepIllustrationProps = {
  stepCurrentIndex: number;
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
};

const stepsVariants: Variants = {
  hidden: {
    x: "100%",
    transition: {
      bounce: 0,
      ease: cubicBezier(0.6, -0.28, 0.74, 0.05),
      duration: 0.64,
    },
  },
  visible: {
    x: 0,
    transition: {
      bounce: 0,
      ease: cubicBezier(0.17, 0.84, 0.44, 1),
      duration: 0.8,
    },
  },
};

export function StepIllustration({
  stepCurrentIndex,
  onClose,
  children,
  isOpen,
}: StepIllustrationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={{
            zIndex: stepCurrentIndex + 1,
          }}
          data-position={stepCurrentIndex.toString()}
          className="absolute inset-0 w-full h-full max-h-full data-[position='0']:shadow-none data-[position='1']:shadow-2xl data-[position='2']:shadow-2xl   shadow-slate-800"
          variants={stepsVariants}
          initial="hidden"
          animate={{ x: stepCurrentIndex * 20 + "%" }}
          exit={"hidden"}
        >
          <Browser onClose={onClose} className="w-full !h-full rounded-tr-none overflow-y-auto">
            {children}
          </Browser>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
