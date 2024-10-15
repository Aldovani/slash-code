import Marquee from "@/components/magicui/marquee";
import { Card } from "../../../card";
import Fintech from "@/assets/Fintech.png";
import houseHunter from "@/assets/house-hunter.png";
import ibico from "@/assets/ibico.png";
import { ChallengeItem } from "./challenge-item";
import { RenderList } from "@/components/render-list";

const CHALLENGES = [
  {
    name: "fintech",
    url: Fintech,
  },
  {
    name: "fintech",
    url: ibico,
  },
  {
    name: "fintech",
    url: houseHunter,
  },
];

export function Challenges() {
  return (
    <Card.Root className="col-start-1 lg:col-end-6 sm:col-end-5 col-end-10 ">
      <Card.Header>
        <Card.Title>Desafios variados</Card.Title>
        <Card.Description className="mt-2">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu{" "}
        </Card.Description>
      </Card.Header>

      <Card.Content className="flex justify-center items-center py-5">
        <Marquee pauseOnHover reverse className="[--duration:15s] [--gap:24px]">
          <RenderList
            data={CHALLENGES}
            renderItem={({ name, url }) => (
              <ChallengeItem name={name} imgUrl={url} key={name} />
            )}
          />
        </Marquee>
      </Card.Content>
    </Card.Root>
  );
}
