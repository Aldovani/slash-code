import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { RenderList } from ".";

const DATA = ["1", "2", "3", "4"];

describe("<RenderList/>", () => {
  it("should be able to render the component", () => {
    render(
      <RenderList
        data={["1"]}
        renderItem={(data, key) => <p key={key}>{data}</p>}
      />
    );

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
  });

  it("should be able to render correctly total of element", async () => {
    render(
      <RenderList
        data={DATA}
        renderItem={(data, key) => <p key={key}>{data}</p>}
      />
    );

    const paragraphs = await screen.findAllByRole("paragraph");

    expect(paragraphs).toHaveLength(4);
  });
});
