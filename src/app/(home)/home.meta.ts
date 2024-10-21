import { Metadata } from "next";

export const HomePageMetaTag: Metadata = {
  title: "Home - SlashCode",
  description:
    "Desafios de programação criados para elevar suas habilidades. Seja no front-end, back-end ou mobile, nós temos o próximo desafio que vai te preparar para o futuro",
  authors: { name: "Aldovani henrique", url: "aldovani.github.io/portfolio" },
  keywords: [
    "desafios de programação",
    "praticar programação",
    "desafios front-end",
    "desafios back-end",
    "desafios mobile",
    "desafios JavaScript",
    "aprender programação",
    "plataforma de desafios",
    "programação gratuita",
    "portfolio de programação",
  ],
  openGraph: {
    title: "Desafios de Programação | Teste e Aprimore Suas Habilidades",
    description:
      "Desafios práticos para programadores de todos os níveis. Encare desafios e melhore suas habilidades agora!",
    url: "https://slash-code.vercel.app/",
    type: "website",
    images: "/assets/imagens/slash-code-preview.png",
    siteName: "Desafios de Programação",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desafios de Programação | Supere seus Limites",
    description:
      "Entre em desafios práticos de front-end, back-end e mobile. Melhore suas habilidades e aprenda de verdade.",
    images: "/assets/imagens/slash-code-preview.png",
  },
};
