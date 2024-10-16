import { Frame, Code, Share2 } from "lucide-react";
import { StepItem } from "./step-item";

type StepsProps = {
  currentStep: number[];
  onChangeStep: (step: number) => void;
};

export function Steps({ onChangeStep, currentStep }: StepsProps) {
  return (
    <ul className="flex gap-5 flex-col items-center justify-between  ">
      <StepItem
        icon={Frame}
        isActive={currentStep[currentStep.length - 1] === 0}
        title="Escolha um desafio"
        description="Selecione entre diversos desafios práticos que vão testar suas habilidades em diferentes linguagens e frameworks. Encontre o que mais combina com seu nível de conhecimento."
        onClickChangeStep={() => onChangeStep(0)}
      />
      <StepItem
        icon={Code}
        isActive={currentStep[currentStep.length - 1] === 1}
        title="Programe"
        description="Desenvolva a solução no seu ambiente favorito. Coloque seus conhecimentos em prática e avance no desafio com código real e aplicável."
        onClickChangeStep={() => onChangeStep(1)}
      />
      <StepItem
        icon={Share2}
        isActive={currentStep[currentStep.length - 1] === 2}
        title="Compartilhe"
        description="Compartilhe suas soluções nas redes sociais, inspire outros desenvolvedores e troque experiências. Juntos, podemos aprender e crescer ainda mais.

"
        onClickChangeStep={() => onChangeStep(2)}
      />
    </ul>
  );
}
