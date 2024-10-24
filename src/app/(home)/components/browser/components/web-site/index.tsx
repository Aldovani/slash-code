import { WebSiteHeader as Header } from "./components/header";

import { RenderList } from "@/components/render-list";
import { ChallengeItem } from "@/components/ui/challenge-item/";
import { cn } from "@/lib/utils";
import { challenges } from "@/types/challenges";

type WebSiteProps = {
  className?: string;
  initialData: challenges[];
};

export function WebSite({ className, initialData }: WebSiteProps) {
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
            data={initialData}
            renderItem={(item) => (
              <ChallengeItem
                data={{
                  ...item,
                  preview: item.preview.url,
                }}
                key={item.id}
              />
            )}
          />
        </div>
      </main>
    </>
  );
}
