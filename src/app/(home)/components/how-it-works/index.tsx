"use client";

import { Steps } from "./steps";
import { StepIllustration } from "./step-illustrations";
import { useHowItWorksModel } from "./how-it-works.module";
import { VisualStudioCode } from "../browser/components/visual-studio-code";
import { WebSite } from "../browser/components/web-site";
import { challenges } from "@/types/challenges";
import { LinkedinPage } from "../browser/components/linkedin";

type HowItWorksProps = {
  initialData: challenges[];
};

export function HowItWorks({ initialData }: HowItWorksProps) {
  const { steps, handleChangeStep, handleCloseStep } = useHowItWorksModel();

  return (
    <section className="container py-16  mx-auto">
      <header>
        <span className="text-violet-600 text-[0.875rem]">
          Por Dentro do Slash
        </span>
        <h2 className="text-2xl xs:text-3.5xl leading-[120%] font-medium text-slate-900 max-w-[470px]">
          Descubra como nossa plataforma funciona{" "}
        </h2>
      </header>
      <div className=" grid lg:grid-cols-[380px_1fr] grid-cols-1 gap-8 sm:mt-12 mt-10">
        <Steps currentStep={steps} onChangeStep={handleChangeStep} />

        <div className="hidden pl-20 lg:block bg-slate-50 relative  pt-24 overflow-hidden rounded-tl-xl">
          <StepIllustration
            onClose={() => handleCloseStep(0)}
            isOpen={steps.includes(0)}
            stepCurrentIndex={steps.findIndex((item) => item === 0)}
          >
            <WebSite
              initialData={initialData}
              className="md:grid-cols-2 grid-cols-1 "
            />
          </StepIllustration>

          <StepIllustration
            onClose={() => handleCloseStep(1)}
            isOpen={steps.includes(1)}
            stepCurrentIndex={steps.findIndex((item) => item === 1)}
          >
            <VisualStudioCode />
          </StepIllustration>

          <StepIllustration
            onClose={() => handleCloseStep(2)}
            isOpen={steps.includes(2)}
            stepCurrentIndex={steps.findIndex((item) => item === 2)}
          >
            <LinkedinPage />
          </StepIllustration>
        </div>
      </div>
    </section>
  );
}
