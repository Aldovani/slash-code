import { Link } from "@/components/ui/link";
import { Cards } from "./cards";

export function Features() {
  return (
    <section className="container mx-auto mt-24 ">
      <header className="flex flex-col">
        <span className="text-violet-400 text-[0.875rem]">Feito para voce</span>
        <h2 className="text-2xl md:text-3.5xl leading-[120%] font-medium text-slate-900">
          Potencialize suas habilidades
        </h2>
        <p className="mt-2 text-slate-400 text-sm leading-[140%] max-w-[430px] text-left">
          Domine novas tecnologias e frameworks com desafios práticos e
          dinâmicos. A cada solução, você se aproxima de se tornar um
          desenvolvedor mais completo e preparado para o mercado. Não importa
          seu nível, sempre há espaço para evoluir.
        </p>
        <Link
          size="normal"
          className="mt-4 w-fit"
          href="/desafios"
          variants="text"
        >
          Desafie-se Agora
        </Link>
      </header>

      <Cards />
    </section>
  );
}
