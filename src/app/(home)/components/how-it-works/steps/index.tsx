import { Frame, Code, Share2 } from "lucide-react";
import { StepItem } from "./step-item";

export function Steps() {
  return (
    <ul className="flex gap-5 flex-col items-center justify-between  ">
      <StepItem
        icon={Frame}
        isActive
        title="Escolha um desafio"
        description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac"
      />
      <StepItem
        icon={Code}
        title="Programe"
        description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac"
      />
      <StepItem
        icon={Share2}
        title="Compartilhe"
        description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac"
      />
    </ul>
  );
}
