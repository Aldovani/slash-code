import { RevealOnScroll } from "@/components/reveal-on-scroll/reveal-on-scroll";
import { ElementType } from "react";

export type LearningItem = {
  title: string;
  description: string;
  icon: ElementType;
};

type ActiveLearningItemProps = {
  data: LearningItem;
};

export function ActiveLearningItem({ data }: ActiveLearningItemProps) {
  return (
    <RevealOnScroll
      transition={{
        duration:0.6
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}

      className="bg-white w-full p-6 border border-slate-200 rounded-lg "
    >
      <data.icon size={24} className="text-violet-600" />
      <h3 className="text-xl font-medium  mt-3 text-slate-600">{data.title}</h3>
      <p className="text-sm text-slate-500 mt-2">{data.description}</p>
    </RevealOnScroll>
  );
}
