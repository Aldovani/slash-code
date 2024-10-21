import {
  ActiveLearningSection,
  Features,
  Hero,
  Projects,
  HowItWorks,
} from "./components";

import { CallToAction } from "@/components/ui/call-to-action";
import { Faq } from "@/components/ui/faq";
import { GetAllChallengesQuery } from "@/graphql/generated/graphql";
import { GET_ALL_CHALLENGES } from "@/graphql/queries";
import { Client } from "@/lib/graphql-request";

export const revalidate = 604800;

export default async function HomePage() {
  const { challenges } = await Client.request<GetAllChallengesQuery>(
    GET_ALL_CHALLENGES
  );

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
