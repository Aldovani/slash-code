import { Link } from "@/components/ui/link";
import { Cards } from "./cards";

export function Features() {
  return (
    <section className="container mx-auto mt-24 ">
      <header className="flex flex-col">
        <span className="text-violet-400 text-[0.875rem]">Feito para voce</span>
        <h2 className="text-2xl xs:text-3.5xl leading-[120%] font-medium text-slate-900">
          Potencialize suas habilidades
        </h2>
        <p className="mt-2 text-slate-400 text-sm leading-[140%] max-w-[530px] text-left">
          Domine novas tecnologias com desafios práticos. A cada solução, você
          se torna um desenvolvedor mais completo. Sempre há espaço para
          evoluir, independentemente do seu nível.
        </p>
        <Link
          size="lg"
          className="mt-4 w-fit"
          href="/desafios"
          variants="ghost"
        >
          Desafie-se agora
        </Link>
      </header>

      <Cards />
    </section>
  );
}
