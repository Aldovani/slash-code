import { Challenge } from "@/components/ui/challenge-item/challenge-item.types";

import houseHunter from "@/assets/house-hunter.png";
import ibico from "@/assets/ibico.png";
import Fintech from "@/assets/Fintech.png";
import { Area, Difficult } from "@/graphql/generated/graphql";

export const CHALLENGES: Challenge[] = [
  {
    area: Area.FrontEnd,
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    difficult: Difficult.Iniciante,
    preview: ibico,
    slug: "ibico",
    title: "Ibico",
  },
  {
    area: Area.FrontEnd,
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    difficult: Difficult.Iniciante,
    preview: Fintech,
    slug: "Fintech",
    title: "Fintech",
  },
  {
    area: Area.FrontEnd,
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    difficult: Difficult.Iniciante,
    preview: houseHunter,
    slug: "House",
    title: "House-Hunter",
  },
];
