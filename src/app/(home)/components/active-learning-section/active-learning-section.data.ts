import { CircleX, Hand, Search } from "lucide-react";
import { LearningItem } from "./components/active-learning-item";

export const ACTIVE_LEARNING: LearningItem[] = [
  {
    icon: Hand,
    title: "Coloque a mao na massa",
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
  },
  {
    icon: CircleX,
    title: "Aprenda errando",
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
  },
  {
    icon: Search,
    title: "Pesquise",
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
  },
];
