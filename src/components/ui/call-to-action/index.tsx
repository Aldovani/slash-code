import { Link } from "@/components/ui/link";

export function CallToAction() {
  return (
    <section className="bg-indigo-700  md:py-36 py-24 ">
      <div className="container mx-auto flex flex-col xs:items-center justify-center">
        <h2 className="mx-auto lg:text-8xl md:text-5xl sm:text-4xl !leading-[115%] text-3xl text-white font-bold xs:text-center max-w-[1080px]">
          Comece agora mesmo um desafio!!
        </h2>
        <p className="sm:mt-6 mt-3 text-slate-200 max-w-[800px] xs:text-center xs:text-base text-xs">
          Eleve suas habilidades de programação agora! Escolha um desafio e
          comece a evoluir. Temos desafios para todos os níveis. Pronto para o
          próximo?
        </p>
        <Link href="/challenges" variants="button" className="sm:mt-10 mt-5">
          Comece agora
        </Link>
      </div>
    </section>
  );
}
