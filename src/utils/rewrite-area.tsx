import { Area } from "@/graphql/generated/graphql";

export function RewriteArea(areas: Area) {
  switch (areas) {
    case Area.FrontEnd:
      return "Front-end";
    case Area.BackEnd:
      return "Back-end";
    case Area.Mobile:
      return "Mobile";

    default:
      return "Front-end";
  }
}
