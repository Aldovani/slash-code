import { AnimatePresence, motion, Variants } from "framer-motion";
import { Browser } from "../../browser";
import { ReactNode, useEffect, useRef } from "react";

type StepIllustrationProps = {
  stepIndex: number;
  currentIndex: number;
  onClose: () => void;
  children: ReactNode;
  isShow: boolean;
};

const stepsVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export function StepIllustration({
  stepIndex,
  onClose,
  children,
  currentIndex,
  isShow,
}: StepIllustrationProps) {
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          style={{ zIndex: stepIndex + 1 }}
          data-position={stepIndex}
          className="absolute bottom-0 right-0 w-full data-[position=0]:translate-x-0 data-[position=1]:translate-x-[-20%] data-[position=2]:translate-x-[-40%] max-w-[810px] "
          variants={stepsVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Browser onClose={onClose} className="w-full rounded-tr-none">
            {children}
          </Browser>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
