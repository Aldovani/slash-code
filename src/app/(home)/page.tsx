import {
  ActiveLearningSection,
  Features,
  Hero,
  Projects,
  HowItWorks,
} from "./components";

import {CallToAction} from '@/components/ui/call-to-action'
import {Faq} from '@/components/ui/faq'


export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Features />
      <ActiveLearningSection />
      <HowItWorks />
      <CallToAction />
      <Faq />
    </>
  );
}
