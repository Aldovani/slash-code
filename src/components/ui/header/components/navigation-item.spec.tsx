import { render, screen } from "@testing-library/react";
import { NavigationItem } from "./navigation-item";

describe("<NavigationItem/>", () => {
  it("should be able to render the component", () => {
    render(
      <NavigationItem currentPath="/" href="/">
        Home
      </NavigationItem>
    );

    const link = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "/");
  });

  it("should be able to render the correctly style when isActive", () => {
    render(
      <NavigationItem currentPath="/" href="/">
        Home
      </NavigationItem>
    );

    const link = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(link).toHaveClass(/text-violet-500/i);
    expect(link).toHaveAttribute("data-active", "true");
  });
  
  it("should be able to render the correctly style when disable", () => {
    render(
      <NavigationItem currentPath="/" isDisabled href="/">
        Home
      </NavigationItem>
    );

    const link = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(link).toHaveClass(/text-slate-300/i);
    expect(link).toHaveAttribute("data-disabled", "true");
  });
});
