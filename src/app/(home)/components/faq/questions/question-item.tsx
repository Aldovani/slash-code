import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QuestionItem = {
  title: string;
  answer: string;
  index: number;
};

export function QuestionItem({ answer, index, title }: QuestionItem) {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="border rounded-xl py-2 px-6 border-slate-200"
    >
      <AccordionTrigger  className="font-medium text-slate-600">
        {title}
      </AccordionTrigger>
      <AccordionContent className="border-none text-slate-400">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
