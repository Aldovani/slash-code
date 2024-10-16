import { WebSiteHeader as Header } from "./components/header";

import { CHALLENGES } from "./challenges.data";
import { RenderList } from "@/components/render-list";
import { ChallengeItem } from "@/components/ui/challenge-item/";
import { cn } from "@/lib/utils";

type WebSiteProps = {
  className?: string;
};

export function WebSite({ className }: WebSiteProps) {
  return (
    <>
      <Header />
      <main className="px-8 pt-5">
        <h3 className="text-2xl text-slate-700 font-medium">Desafios</h3>
        <p className="text-slate-400 text-sm">
          Desafie suas habilidades e amplie seu conhecimento. Comece agora!
        </p>

        <div className={cn("mt-8 grid grid-cols-3 gap-6", className)}>
          <RenderList
            data={CHALLENGES}
            renderItem={(item) => <ChallengeItem data={item} key={item.slug} />}
          />
        </div>
      </main>
    </>
  );
}
