import { StaticImageData } from "next/image";
import Fintech from "@/assets/Fintech.png";
import house from "@/assets/house-hunter.png";
import ibico from "@/assets/ibico.png";

export type Post = {
  text: string;
  img: StaticImageData | string;
  userName: string;
  title: string;
  pronouns: string;
};

export const POSTS: Post[] = [
  {
    title: "Front-end Development | React | NextJs | Node | Typescript",
    img: Fintech,
    text: ` 🎯 Mais um desafio concluído na Slashcode! 🚀 Finalizei mais um
    desafio de programação na plataforma Slashcode e, como sempre, foi uma
    experiência incrível de aprendizado e crescimento. 💡`,
    userName: "Aldovani",
    pronouns: "Ele/Dele",
  },
  {
    title: "Front-end Development  | React ",
    img: ibico,
    text: ` 🎯 Concluído mais um desafio na Slashcode! 🚀
    Hoje finalizei mais um desafio de programação na Slashcode, e a sensação de evolução é sempre gratificante. 💡
    Foi uma oportunidade incrível para colocar em prática habilidades em front, além de aprender novas abordagens e resolver problemas complexos. Cada desafio concluído é mais um passo rumo ao aprimoramento contínuo na minha jornada como desenvolvedor.`,
    pronouns: "Ela/Dela",
    userName: "Juliana",
  },
  {
    title: "Estagiário Front-end  | React ",
    img: house,
    text: ` 🎯 Mais um desafio vencido na Slashcode! 🚀
    Terminei mais um desafio da Slashcode, e a jornada foi enriquecedora! 💡
    A cada desafio, consigo me aprofundar ainda mais em front e aprimorar minha capacidade de resolver problemas. Essa experiência tem sido fundamental para continuar evoluindo no mundo da programação, e estou sempre animado para aprender mais.`,
    userName: "James",
    pronouns: "Ele/Dele",
  },
];
