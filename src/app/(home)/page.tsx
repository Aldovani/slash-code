import {
  ActiveLearningSection,
  Features,
  Hero,
  Projects,
  HowItWorks,
} from "./components";

import { CallToAction } from "@/components/ui/call-to-action";
import { Faq } from "@/components/ui/faq";
import type { Metadata } from "next";
import { getChallenges } from "@/services/challenegs";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Home - SlashCode",
};

export default async function HomePage() {
  const challenges = await getChallenges({ perPage: 6 });

  return (
    <>
      <Hero initialData={challenges} />
      <Projects />
      <Features />
      <ActiveLearningSection />
      <HowItWorks initialData={challenges} />
      <CallToAction />
      <Faq />
    </>
  );
}
