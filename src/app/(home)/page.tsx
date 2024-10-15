import {
  ActiveLearningSection,
  Features,
  Hero,
  Projects,
  CallToAction,
  HowItWorks,
  Faq,
} from "./components";

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
