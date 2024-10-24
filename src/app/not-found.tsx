import { Link } from "@/components/ui/link";
import { Browser } from "./(home)/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 pagina não encontrada - SlashCode",
};

export default function NotFoundPage() {
  return (
    <div className="bg-slate-50    ">
      <div className="container   h-full pt-20 ">
        <Browser className=" min-h-[calc(100svh_-_82px_-96px_-_80px)] aspect-video ">
          <div className="flex items-center justify-center h-full flex-col px-8">
            <h1 className="md:text-8xl sm:text-6xl text-4xl  text-slate-600 font-medium">
              404
            </h1>
            <h2 className="text-center mt-2 md:text-5xl sm:text-4xl text-3xl font-medium text-slate-500">
              Página não encontrada
            </h2>
            <p className="mt-4  text-slate-400 max-w-[580px] text-center sm:text-base xs:text-sm text-xs">
              Parece que você se perdeu pelo caminho... Mas não se preocupe,
              estamos aqui para ajudar você a voltar ao que interessa!
            </p>

            <Link href="/" variants="button" className="mt-8">
              {" "}
              Voltar ao inicio
            </Link>
          </div>
        </Browser>
      </div>
    </div>
  );
}
