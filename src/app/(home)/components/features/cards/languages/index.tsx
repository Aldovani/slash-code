import Marquee from "@/components/magicui/marquee";
import { Card } from "../../../card";
import {
  languagesLine1,
  languagesLine2,
  languagesLine3,
} from "./languages.data";
import { LanguageItem } from "./language-item";
import { RenderList } from "@/components/render-list";

export function Languages() {
  return (
    <Card.Root className="max-lg:row-start-1 col-start-1  lg:col-start-6 col-end-10 lg:col-end-[14] overflow-hidden ">
      <Card.Content className="py-8">
        <Marquee
          pauseOnHover
          reverse
          className="[--duration:24s] [--gap:24px] "
        >
          <RenderList
            data={languagesLine1}
            renderItem={(language) => (
              <LanguageItem {...language} key={language.name} />
            )}
          />
        </Marquee>
        <Marquee pauseOnHover className="[--duration:24s] [--gap:24px] ">
          <RenderList
            data={languagesLine2}
            renderItem={(language) => (
              <LanguageItem {...language} key={language.name} />
            )}
          />
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:24s] [--gap:24px]">
          <RenderList
            data={languagesLine3}
            renderItem={(language) => (
              <LanguageItem {...language} key={language.name} />
            )}
          />
        </Marquee>
      </Card.Content>

      <Card.Header>
        <Card.Title>Escolha sua linguagem ou framework favorito</Card.Title>
        <Card.Description className="mt-2 max-w-[52 4px]">
          Desenvolva seus projetos na tecnologia que você mais gosta! Seja
          React, Node, Python ou qualquer outra, temos desafios para cada stack,
          permitindo que você pratique e aprenda na linguagem que preferir.
        </Card.Description>
      </Card.Header>
    </Card.Root>
  );
}
