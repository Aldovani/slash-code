import { Accordion } from "@/components/ui/accordion";
import { QuestionItem } from "./question-item";
import { QUESTIONS } from "./questions.data";
import { RenderList } from "@/components/render-list";

export function Questions() {
  return (
    <div>
      <Accordion className="flex flex-col gap-6 " collapsible type="single">
        <RenderList
          data={QUESTIONS}
          renderItem={(props, index) => (
            <QuestionItem {...props} index={index} key={index} />
          )}
        />
      </Accordion>
    </div>
  );
}
