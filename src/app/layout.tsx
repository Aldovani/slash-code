import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SlashCode",
  robots: "index, follow",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`overflow-x-hidden ${poppins.className}`}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
