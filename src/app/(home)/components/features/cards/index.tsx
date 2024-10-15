import { Challenges } from "./challenges";
import { Languages } from "./languages";
import { LevelOfDifficulty } from "./level-of-difficulty";
import { Ranking } from "./ranking";

export function Cards() {
  return (
    <div className=" grid gap-8  lg:grid-cols-[repeat(12,1fr)] md:grid-cols-[repeat(6,1fr)] grid-cols-[repeat(4,1fr)] w-full mt-16">
      <Challenges />
      <Languages />
      <LevelOfDifficulty />
      <Ranking />
    </div>
  );
}
