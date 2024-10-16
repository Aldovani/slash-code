import { Link } from "@/components/ui/link";

export function CallToAction() {
  return (
    <section className="bg-indigo-700  md:py-36 py-24 ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="mx-auto lg:text-8xl md:text-5xl !leading-[115%] text-4xl text-white font-bold text-center max-w-[1080px]">
          Comece agora mesmo um desafio!!
        </h2>
        <p className="mt-6 text-slate-200 max-w-[800px] text-center">
          Não espere mais para elevar suas habilidades de programação! Escolha
          um desafio, mergulhe de cabeça e comece a aprimorar suas competências
          agora. Seja qual for seu nível, temos desafios prontos para
          impulsionar sua carreira. Está pronto para enfrentar seu próximo
          desafio?
        </p>
        <Link href="/challenges" variants="button" className="mt-10">
          Comece agora
        </Link>
      </div>
    </section>
  );
}
