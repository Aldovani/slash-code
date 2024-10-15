import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { HowItWorks } from ".";

describe("<HowItWorks/>", () => {
  it("should be able to render the component", () => {
    render(<HowItWorks />);

    const title = screen.getByRole("heading", {
      name: /Descubra como nossa plataforma funciona/i,
    });

    expect(title).toBeInTheDocument();
  });
});
