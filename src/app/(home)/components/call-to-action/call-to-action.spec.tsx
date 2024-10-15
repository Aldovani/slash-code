import { render, screen } from "@testing-library/react";
import { CallToAction } from ".";

describe("<CallToAction/>", () => {
  it("should be able to render the component", () => {
    render(<CallToAction />);

    const heading = screen.getByRole("heading", {
      level: 2,
    });
    const link = screen.getByRole("link", {
      name: /Comece agora/i,
    });

    expect(heading).toBeVisible();
    expect(link).toBeVisible();
  });
});
