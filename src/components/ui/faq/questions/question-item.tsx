import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QuestionItem = {
  question: string;
  answer: string;
  index: number;
};

export function QuestionItem({ answer, index, question }: QuestionItem) {
  return (
    <AccordionItem
      value={`item-${index}`}
      data-testid="question"
      className="border rounded-xl py-2 px-6 border-slate-200"
    >
      <AccordionTrigger className="font-medium text-left text-slate-600">
        {question}
      </AccordionTrigger>
      <AccordionContent className="border-none text-left text-slate-500">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
