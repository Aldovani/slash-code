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
  area: Area;
  difficult: string;
  description: string;
  title: string;
  figmaUrl: string | null | undefined;
  author: Author;
};

export function ChallengeHeader({
  area,
  difficult,
  description,
  figmaUrl,
  title,
  author,
}: ChallengeHeaderProps) {
  return (
    <header className="mt-6 flex max-md:flex-col max-md:gap-8   justify-between md:items-center">
      <div>
        <div>
          <div className="flex gap-2 items-center">
            <Badge>{RewriteArea(area)}</Badge>
            <Badge>{difficult}</Badge>
          </div>
          <h1 className="text-5xl text-slate-600 mt-3 font-semibold ">
            {title}
          </h1>
          <p className="break-words text-slate-500 max-w-[650px] mt-2 line-clamp-2 ">
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
        <span className="text-slate-500 ">Desenvolvido por:</span>
        <div className="flex  items-start mt-2 gap-3">
          <Image
            alt="Aldovani"
            src={author.avatar || ""}
            width={64}
            height={64}
            className="rounded-full"
          />

          <div>
            <h3 className="font-semibold text-slate-600">{author.name}</h3>
            <span className=" text-slate-500">{author.role}</span>

            <nav className="mt-2">
              <ul className="flex gap-3">
                {author.social.portfolio && (
                  <li className="text-slate-500 hover:text-violet-600">
                    <a href={author.social.portfolio} target="_blank">
                      <Smile />
                    </a>
                  </li>
                )}
                {author.social.linkedin && (
                  <li className="text-slate-500 hover:text-violet-600">
                    <a href={author.social.linkedin} target="_blank">
                      <Linkedin />
                    </a>
                  </li>
                )}
                {author.social.twitter && (
                  <li className="text-slate-500 hover:text-violet-600">
                    <a href={author.social.twitter} target="_blank">
                      <Twitter />
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
