import { Badge } from "@/components/ui/badge";
import { Area } from "@/graphql/generated/graphql";
import { RewriteArea } from "@/utils/rewrite-area";
import { Linkedin, Smile, Twitter } from "lucide-react";
import Image from "next/image";

type ChallengeHeaderProps = {
  area: Area;
  difficult: string;
  description: string;
  title: string;
  figmaUrl: string | null | undefined;
};

export function ChallengeHeader({
  area,
  difficult,
  description,
  figmaUrl,
  title,
}: ChallengeHeaderProps) {
  return (
    <header className="mt-6 flex justify-between items-center">
      <div>
        <div>
          <div className="flex gap-2 items-center">
            <Badge>{RewriteArea(area)}</Badge>
            <Badge>{difficult}</Badge>
          </div>
          <h1 className="text-5xl text-slate-600 mt-3 font-semibold ">
            {title}
          </h1>
          <p className="break-words text-slate-400 max-w-[650px] mt-2 line-clamp-2 ">
            {description}
          </p>
        </div>

        {figmaUrl && (
          <a
            href={figmaUrl}
            target="_blank"
            className="w-full bg-violet-600 text-white max-w-[380px] py-2 rounded-md block text-center mt-6 hover:bg-violet-500 transition-colors"
          >
            Acessar Figma
          </a>
        )}
      </div>

      <div>
        <span className="text-slate-400 ">Desenvolvido por:</span>
        <div className="flex  items-start mt-2 gap-3">
          <Image
            alt="Aldovani"
            src="https://avatars.githubusercontent.com/u/56704952?v=4"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold text-slate-600">Aldovani</h3>
            <span className=" text-slate-400">Desenvolvedor</span>

            <nav className="mt-2">
              <ul className="flex gap-3">
                <li className="text-slate-400 hover:text-violet-600">
                  <a href="https://aldovani.github.io/portfolio">
                    <Smile />
                  </a>
                </li>
                <li className="text-slate-400 hover:text-violet-600">
                  <a href="https://aldovani.github.io/portfolio">
                    <Linkedin />
                  </a>
                </li>
                <li className="text-slate-400 hover:text-violet-600">
                  <a href="https://aldovani.github.io/portfolio">
                    <Twitter />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
