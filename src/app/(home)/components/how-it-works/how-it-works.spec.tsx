import { render, screen } from "@testing-library/react";
import { HowItWorks } from ".";
import { CHALLENGES } from "../browser/components/web-site/challenges.data";

jest.mock("../browser/components/visual-studio-code", () => {
  const ComponentToMock = () => <div />;
  return { VisualStudioCode: ComponentToMock };
});

describe("<HowItWorks/>", () => {
  it("should be able to render the component", () => {
    render(<HowItWorks initialData={CHALLENGES} />);

    const title = screen.getByRole("heading", {
      name: /Descubra como nossa plataforma funciona/i,
    });

    expect(title).toBeInTheDocument();
  });
});
