import { render, screen } from "@testing-library/react";
import { QuestionItem } from "./question-item";
import { QUESTIONS } from "./questions.data";
import { Accordion } from "@/components/ui/accordion";

describe("<QuestionItem/>", () => {
  it("should be a render the component ", () => {
    render(
      <Accordion className="flex flex-col gap-6 " collapsible type="single">
        <QuestionItem
          answer="Default answer"
          index={0}
          question="Default answer"
        />
      </Accordion>
    );
    const question = screen.getByRole("heading", { level: 3 });
    const answer = screen.getByText(/Default answer/i);

    expect(question).toBeVisible();
    expect(answer).toBeVisible();
  });
});
