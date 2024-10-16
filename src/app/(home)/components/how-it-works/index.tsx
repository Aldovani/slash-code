"use client";

import dynamic from "next/dynamic";
import { WebSite } from "../browser/components/web-site";
import { Steps } from "./steps";
import { useState } from "react";
import { StepIllustration } from "./step-ilustrations";

const VisualStudioCode = dynamic(
  () => import("../browser/components/visual-studio-code")
);

export function HowItWorks() {
  const [steps, setSteps] = useState([0]);

  const currentStep = steps[steps.length - 1];

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

  return (
    <section className="container py-16 mt-20 mx-auto">
      <header>
        <span className="text-violet-400 text-[0.875rem]">
          Por Dentro do Slash
        </span>
        <h2 className="text-3.5xl leading-[120%] font-medium text-slate-900 max-w-[470px]">
          Descubra como nossa plataforma funciona{" "}
        </h2>
      </header>
      <div className=" grid lg:grid-cols-[380px_1fr] grid-cols-1 gap-8 mt-12">
        <Steps currentStep={steps} onChangeStep={handleChangeStep} />

        <div className="bg-slate-50 relative pl-2 sm:pl-11 md:pl-20 pt-24 overflow-hidden rounded-tl-xl">
          <StepIllustration
            onClose={() => handleCloseStep(0)}
            isShow={steps.includes(0)}
            stepIndex={steps.findIndex((item) => item === 0)}
            currentIndex={currentStep}
            >
            <WebSite className="lg:grid-cols-2 grid-cols-1 " />
          </StepIllustration>

          <StepIllustration
            onClose={() => handleCloseStep(1)}
            currentIndex={currentStep}
            isShow={steps.includes(1)}
            stepIndex={steps.findIndex((item) => item === 1)}
            >
            <VisualStudioCode />
          </StepIllustration>

          <StepIllustration
            onClose={() => handleCloseStep(2)}
            isShow={steps.includes(2)}
            stepIndex={steps.findIndex((item) => item === 2)}
            currentIndex={currentStep}
          >
            <>aqui vem a pagina do linkedin</>
          </StepIllustration>
        </div>
      </div>
    </section>
  );
}
