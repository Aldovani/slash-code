import "@testing-library/jest-dom";

import { BugIcon } from "lucide-react";
import { render, screen } from "@testing-library/react";
import { StepItem } from "./step-item";

describe("<StepItem/>", () => {
  it("should be able to render the component", () => {
    render(<StepItem description="Description" icon={BugIcon} title="Title" />);

    const title = screen.getByRole("heading");
    const description = screen.getByRole("paragraph");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should be able to render the active styles", () => {
    render(
      <StepItem
        description="Description"
        icon={BugIcon}
        title="Title"
        isActive
      />
    );

    const container = screen.getByRole("listitem");

    expect(container).toHaveClass(/bg-violet-50/i);
    expect(container).toHaveAttribute("data-is-active", "true");
  });
});
