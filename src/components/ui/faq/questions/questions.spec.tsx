import { render, screen } from "@testing-library/react";
import { Questions } from ".";
import { QUESTIONS } from "./questions.data";

describe("<Question/>", () => {
  it("should be a render the component ", () => {
    render(<Questions />);

    const questions = screen.getAllByTestId("question");

    expect(questions).toHaveLength(QUESTIONS.length);
  });
});
