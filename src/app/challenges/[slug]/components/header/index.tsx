import { Badge } from "@/components/ui/badge";
import { Area } from "@/graphql/generated/graphql";
import { RewriteArea } from "@/utils/rewrite-area";
import { Linkedin, Smile, Twitter } from "lucide-react";
import Image from "next/image";

type Author = {
  name: string;
  role: string;
  avatar: string | null | undefined;
  social: {
    portfolio: string | null | undefined;
    linkedin: string | null | undefined;
    twitter: string | null | undefined;
  };
};

type ChallengeHeaderProps = {
  data: {
    area: Area;
    difficult: string;
    description: string;
    title: string;
    figmaUrl: string | null | undefined;
    author: Author;
  };
};

export function ChallengeHeader({ data }: ChallengeHeaderProps) {
  return (
    <header className="mt-6 flex max-md:flex-col max-md:gap-8   justify-between md:items-center">
      <div>
        <div>
          <div className="flex gap-2 items-center">
            <Badge>{RewriteArea(data.area)}</Badge>
            <Badge>{data.difficult}</Badge>
          </div>
          <h1 className="sm:text-5xl text-3.5xl text-slate-600 mt-3 font-semibold ">
            {data.title}
          </h1>
          <p className="break-words text-slate-400 max-w-[650px] mt-2 md:line-clamp-2 sm:text-base  text-xs">
            {data.description}
          </p>
        </div>

        {data.figmaUrl && (
          <a
            href={data.figmaUrl}
            target="_blank"
            className="w-full bg-violet-600 text-white max-w-[380px] py-2 rounded-md block text-center mt-6 hover:bg-violet-500 transition-colors"
          >
            Acessar Figma
          </a>
        )}
      </div>

      <div>
        <span className="text-slate-500 ">Desenvolvido por:</span>
        <div className="flex  items-start mt-2 gap-3">
          <Image
            alt="Aldovani"
            src={data.author.avatar || ""}
            width={64}
            height={64}
            className="rounded-full"
          />

          <div>
            <h3 className="font-semibold text-slate-600">{data.author.name}</h3>
            <span className=" text-slate-500">{data.author.role}</span>

            <nav className="mt-2">
              <ul className="flex gap-3">
                {data.author.social.portfolio && (
                  <li className="text-slate-500 hover:text-violet-600">
                    <a href={data.author.social.portfolio} target="_blank">
                      <Smile />
                      <span className="sr-only">Portfolio</span>
                    </a>
                  </li>
                )}
                {data.author.social.linkedin && (
                  <li className="text-slate-500 hover:text-violet-600">
                    <a href={data.author.social.linkedin} target="_blank">
                      <Linkedin />
                      <span className="sr-only">Linkedin</span>
                    </a>
                  </li>
                )}
                {data.author.social.twitter && (
                  <li className="text-slate-500 hover:text-violet-600">
                    <a href={data.author.social.twitter} target="_blank">
                      <Twitter />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
