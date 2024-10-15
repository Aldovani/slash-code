  import { render, screen,fireEvent } from "@testing-library/react";
  import { Button } from ".";

  describe("<Button/>", () => {
    it("should be able to render the <Button/>", () => {
      render(<Button>Click</Button>);

      const element = screen.getByRole("button", {
        name: /Click/i,
      });

      expect(element).toBeInTheDocument();
    });

    it("should be able to render the Button variant primary", () => {
      render(<Button>Click</Button>);

      const element = screen.getByRole("button", {
        name: /Click/i,
      });

      expect(element).toHaveClass(/bg-slate-50/i);
    });

    it("should be able to render the Button variant outline", () => {
      render(<Button variants="outline">Click</Button>);

      const element = screen.getByRole("button", {
        name: /Click/i,
      });

      expect(element).toHaveClass(/bg-white/i);
    });
    
    it("should be able to click in the Button", () => {
      const handleClick= jest.fn()
      render(<Button onClick={handleClick} variants="outline">Click</Button>);

      const element = screen.getByRole("button", {
        name: /Click/i,
      });
      
      fireEvent.click(element)

      expect(handleClick).toHaveBeenCalled();
    });
  });
