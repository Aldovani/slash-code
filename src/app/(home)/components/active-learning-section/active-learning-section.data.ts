import { CircleX, Hand, Search } from "lucide-react";
import { LearningItem } from "./components/active-learning-item";

export const ACTIVE_LEARNING: LearningItem[] = [
  {
    icon: Hand,
    title: "Coloque a mao na massa",
    description:
      "A melhor forma de aprender é fazendo. Encare desafios práticos e coloque suas habilidades em teste, construindo soluções do zero.",
  },
  {
    icon: CircleX,
    title: "Aprenda errando",
    description:
      "Aqui você pode falhar e aprender com seus erros. Cada tentativa te aproxima da solução, fortalecendo seu entendimento e aprimorando suas técnicas.",
  },
  {
    icon: Search,
    title: "Pesquise",
    description:
      "O conhecimento está ao seu alcance. Utilize seus recursos e habilidades de pesquisa para encontrar respostas e continuar evoluindo como programador.",
  },
];
