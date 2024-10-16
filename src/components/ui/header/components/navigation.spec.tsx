import { render, screen } from "@testing-library/react";
import { Navigation } from "./navigation";

describe("<Navigation/>", () => {
  it("should be able to render the component", () => {
    render(<Navigation isOpen onHandleCloseNavigation={() => {}} />);

    const links = screen.getAllByRole("link",);
    
    expect(links).toHaveLength(3);
  });
});
