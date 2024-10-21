import Marquee from "@/components/magicui/marquee";
import { Card } from "../../../card";

import { ChallengeItem } from "./challenge-item";
import { RenderList } from "@/components/render-list";
import { CHALLENGES } from "./challenges.data";

export function Challenges() {
  return (
    <Card.Root className="col-start-1 lg:col-end-6   col-end-10 ">
      <Card.Header>
        <Card.Title>Desafios variados</Card.Title>
        <Card.Description className="mt-2">
          Explore uma ampla gama de desafios práticos em diversas áreas da
          programação. Desde sistemas complexos até soluções criativas, escolha
          o desafio que combina com você e eleve suas habilidades para o próximo
          nível.
        </Card.Description>
      </Card.Header>

      <Card.Content className="flex justify-center items-center py-5">
        <Marquee pauseOnHover reverse className="[--duration:15s] [--gap:24px]">
          <RenderList
            data={CHALLENGES}
            renderItem={(challenge) => (
              <ChallengeItem {...challenge} key={challenge.name} />
            )}
          />
        </Marquee>
      </Card.Content>
    </Card.Root>
  );
}
