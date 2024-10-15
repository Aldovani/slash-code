import { render, screen } from "@testing-library/react";
import { ChallengeItem } from ".";
import { Challenge } from "./challenge-item.types";

const data: Challenge = {
  area: "Front-end",
  description: "Description test",
  difficult: "Iniciante",
  preview: "https://image.com",
  slug: "challenge",
  title: "Test challenge",
};

describe("<ChallengeItem/>", () => {
  it("Should be able to render the item", () => {
    render(<ChallengeItem data={data} />);

    const heading = screen.getByRole("heading", { name: /Test challenge/i });
    const description = screen.getByRole("paragraph");
    const link = screen.getByRole("link");

    expect(heading).toBeVisible();
    expect(description).toBeVisible();
    expect(link).toHaveAttribute("href", "/challenges/challenge");
  });
});
