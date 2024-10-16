import Image from "next/image";

import { Link } from "@/components/ui/link";
import { RenderList } from "@/components/render-list";

import { ACTIVE_LEARNING } from "./active-learning-section.data";

import { ActiveLearningItem } from "./components/active-learning-item";
import { Browser } from "../browser";
import { Card } from "../card";

import youtube from "@/assets/youtube.png";

export function ActiveLearningSection() {
  return (
    <section className="bg-slate-50 py-16 mt-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center  flex-wrap gap-6">
          <header className="flex flex-col">
            <span className="text-violet-400 text-[0.875rem]">
              Feito para voce
            </span>
            <h2 className="text-3.5xl leading-[120%] font-medium text-slate-900">
              Fuja de tutorias
            </h2>
            <p className="mt-2 text-slate-400 text-base leading-[140%] max-w-[480px] text-left">
              Aprenda de verdade, resolvendo desafios reais de programação.
              Chega de seguir passo a passo, é hora de aplicar seus
              conhecimentos e desenvolver suas habilidades na prática.
            </p>
            <Link
              size="normal"
              variants="button"
              className="mt-4 w-fit py-3 px-8 "
              href="/challenges"
            >
              Começe agora
            </Link>
          </header>
          <Card.Root className="w-full max-w-[696px] ">
            <Card.Content className="pl-10 pt-8">
              <Browser className="!h-fit">
                <Image alt="Youtube page" src={youtube} />
              </Browser>
            </Card.Content>
          </Card.Root>
        </div>

        <div className="flex max-md:flex-wrap justify-between gap-8 mt-10 ">
          <RenderList
            data={ACTIVE_LEARNING}
            renderItem={(data) => <ActiveLearningItem data={data} />}
          />
        </div>
      </div>
    </section>
  );
}
