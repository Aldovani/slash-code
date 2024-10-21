import { render, screen } from "@testing-library/react";
import { HowItWorks } from ".";
import { Area, Difficult } from "@/graphql/generated/graphql";
import { challenges } from "@/types/challenges";

jest.mock("../browser/components/visual-studio-code", () => {
  const ComponentToMock = () => <div />;
  return { VisualStudioCode: ComponentToMock };
});

export const CHALLENGES: challenges[] = [
  {
    area: Area.FrontEnd,
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    difficult: Difficult.Iniciante,
    preview: {
      url: "http://localhost:3000/_next/image?url=https%3A%2F%2Fsa-east-1.graphassets.com%2Fclyrig3d502eg07knb4q44aq6%2Fcm2at9nid0ck707kb8guyr4zn&w=1920&q=75",
    },
    slug: "ibico",
    title: "Ibico",
    id: "ibico",
  },
];

describe("<HowItWorks/>", () => {
  it("should be able to render the component", () => {
    render(<HowItWorks initialData={CHALLENGES} />);

    const title = screen.getByRole("heading", {
      name: /Descubra como nossa plataforma funciona/i,
    });

    expect(title).toBeInTheDocument();
  });
});
