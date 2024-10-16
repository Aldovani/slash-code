import { render, screen } from "@testing-library/react";
import { Card } from ".";

describe("<Card/>", () => {
  it("Should be able to rende the component", () => {
    render(
      <Card.Root>
        <Card.Header>
          <Card.Title>Card test</Card.Title>
          <Card.Description>Card Description</Card.Description>
          <Card.Content>
            <p>content</p>
          </Card.Content>
        </Card.Header>
      </Card.Root>
    );

    const heading = screen.getByRole("heading", { level: 3 });
    const paragraph = screen.getByText(/Card test/i);
    const content = screen.getByText(/Content/i);

    expect(heading).toBeVisible();
    expect(paragraph).toBeVisible();
    expect(content).toBeVisible();
  });
});
