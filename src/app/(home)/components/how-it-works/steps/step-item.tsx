import { ElementType } from "react";

type StepItemProps = {
  icon: ElementType;
  title: string;
  description: string;
  isActive?: boolean;
  onClickChangeStep: () => void;
};

export function StepItem({
  icon: Icon,
  isActive = false,
  description,
  title,
  onClickChangeStep,
}: StepItemProps) {
  return (
    <li
      onClick={onClickChangeStep}
      data-is-active={isActive}
      className="group data-[is-active=true]:bg-violet-50 cursor-pointer hover:bg-violet-50 transition-colors flex flex-col px-6 py-8 border data-[is-active=true]:border-transparent hover:border-transparent border-slate-200 rounded-xl"
    >
      <span className="group-data-[is-active=true]:bg-white p-2 w-fit  rounded-md">
        <Icon size={24} className="text-violet-600" />
      </span>
      <h3 className="font-medium sm:text-xl text-lg mt-4 group-data-[is-active=true]:text-violet-900 text-slate-800">
        {title}
      </h3>
      <p className="group-data-[is-active=true]:text-violet-600 text-slate-400 mt-2 sm:text-base text-xs  ">
        {description}
      </p>
    </li>
  );
}
