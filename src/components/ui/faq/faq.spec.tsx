import { render, screen } from "@testing-library/react";
import { Faq } from ".";

describe("<Faq/>", () => {
  it("should be able render the component", () => {
    render(<Faq />);

    const heading = screen.getByRole("heading", { level: 2 });
    const paragraph = screen.getByRole("paragraph");

    expect(heading).toBeVisible();
    expect(paragraph).toBeVisible();
  });
});
