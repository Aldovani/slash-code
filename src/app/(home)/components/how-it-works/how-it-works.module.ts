import { useState } from "react";

export function useHowItWorksModel() {
  const [steps, setSteps] = useState([0]);

  function handleChangeStep(step: number) {
    setSteps((prev) => {
      
      if (prev.includes(step)) {
        const stepIndex = prev.findIndex((item) => item === step);
        const newStep = prev.slice(0, stepIndex + 1);
        return newStep;
      }

      return [...prev, step];
    });
  }

  function handleCloseStep(step: number) {
    setSteps((prev) => prev.filter((item) => item !== step));
  }

  return {
    handleCloseStep,
    handleChangeStep,
    steps
  };
}
