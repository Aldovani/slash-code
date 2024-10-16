import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("<Footer/>", () => {
  it("Should be able to render the <Footer/>", () => {
    render(<Footer />);

    const paragraph = screen.getByText(/Todos os direitos reservados./i);
    const link = screen.getByRole("link", { name: /Aldovani/i });

    expect(paragraph).toBeVisible();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute(
      "href",
      "https://aldovani.github.io/portfolio/"
    );
  });
});
