import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("<Header/>", () => {
  it("should be able to render the component", () => {
    render(<Header />);

    const button = screen.getByRole("link", {
      name: /Começar agora/i,
    });
    const logo = screen.getByRole("link", {
      name: /SlashCode Logo/i,
    });

    expect(button).toBeVisible();
    expect(button).toHaveAttribute("href", "/challenges");
    
    expect(logo).toBeVisible();
    expect(logo).toHaveAttribute("href", "/");
  });
});
