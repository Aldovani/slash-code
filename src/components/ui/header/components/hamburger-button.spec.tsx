import { render, screen, fireEvent } from "@testing-library/react";
import { HamburgerButton } from "./hamburger-button";

describe("<HamburgerButton/>", () => {
  it("should be able to render the <HamburgerButton/>", () => {
    render(
      <HamburgerButton
        isOpen={false}
        onClick={() => {}}
      />
    );

    const element = screen.getByRole("button");

    expect(element).toBeInTheDocument();
  });

  it("should be able to render the when its open", () => {
    render(
      <HamburgerButton
        isOpen={true}
        onClick={() => {}}
      />
    );

    const element = screen.getByRole("button");

    expect(element).toHaveAttribute("data-is-open", "true");
  });

  it("should be able to click to open and close", () => {
    const handleClick = jest.fn();

    render(<HamburgerButton isOpen={false} onClick={handleClick} />);

    const element = screen.getByRole("button");

    fireEvent.click(element);
    fireEvent.click(element);

    expect(element).toHaveAttribute("data-is-open", "false");
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
