import { render, screen } from "@testing-library/react";
import { Link } from ".";

describe("<Link/>", () => {
  it("Should be able render the component", () => {
    render(<Link href="/home">Home</Link>);

    const element = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(element).toHaveAttribute("href", "/home");
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  it("Should be able render with button styles variant", () => {
    render(<Link href="/home" variants="button">Home</Link>);

    const element = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(element).toHaveClass(/bg-violet-50/i);
    expect(element).toHaveClass(/text-violet-600/i);
  });

  it("Should be able render with outline styles variant", () => {
    render(<Link href="/home" variants="outline">Home</Link>);

    const element = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(element).toHaveClass(/bg-white/i);
    expect(element).toHaveClass(/text-violet-600/i);
  });
});
