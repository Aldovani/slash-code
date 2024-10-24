import { Link } from "@/components/ui/link";
import { Browser } from "../browser";
import { WebSite } from "../browser/components/web-site";
import { Trophy } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { challenges } from "@/types/challenges";

type HeroProps = {
  initialData: challenges[];
};

export function Hero({ initialData }: HeroProps) {
  return (
    <main className=" relative flex flex-col items-center gap-12 sm:px-8 px-4">
      <div className="flex flex-col items-center mt-20">
        <div className="flex gap-2 items-center  w-fit py-2 px-4  bg-violet-50 rounded-lg text-violet-600">
          <Trophy />
          <span className="font-medium text-sm sm:text-base ">
            Embarquem em novos desafios 
          </span>
        </div>
        <h1 className=" max-w-[420px] md:max-w-[730px] sm:max-w-[420px] text-center mt-2  text-slate-700  font-medium md:text-[4rem] text-3xl  !leading-[115%]">
          Encare Desafios e<span className="text-violet-600"> Supere </span>
          seus
          <span className="text-violet-600"> Limites</span>!
        </h1>
        <p className="max-w-[710px] text-center text-slate-400 mt-4 md:text-base sm:text-sm text-xs">
          Desafios de programação criados para elevar suas habilidades. Seja no
          front-end, back-end ou mobile, nós temos o próximo desafio que vai te
          preparar para o futuro.
        </p>
        <Link
          href="/challenges"
          variants="button"
          className="mt-8 bg-white relative z-10"
        >
          Comece Agora
        </Link>
      </div>

      <div className="relative perspective-1600  rounded-t-xl w-full max-w-[1215px]  ">
        <div className="absolute  w-full h-full bg-violet-600 blur-[150px] -z-10  opacity-20 inset-0" />
        <div className="relative overflow-hidden  transform-style-3d  rounded-t-xl w-full">
          <BorderBeam
            size={400}
            borderWidth={2}
            colorFrom="#6d28d9"
            colorTo="#ddd6fe"
          />

          <Browser>
            <WebSite
              initialData={initialData}
              className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-center"
            />
          </Browser>
        </div>
      </div>
    </main>
  );
}
