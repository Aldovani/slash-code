import { Questions } from "./questions";

export function Faq() {
  return (
    <section className="container mx-auto grid gap-10 md:grid-cols-2 grid-cols-1 py-20">
      <header className="flex flex-col   md:sticky md:top-32 md:left-0 h-fit">
        <span className="text-violet-400 text-[0.875rem]">FAQ</span>
        <h2 className="text-3.5xl leading-[120%] font-medium text-slate-900 max-w-[420px]">
          Perguntas frequentes sobre nós
        </h2>
        <p className="mt-2 text-slate-500 text-sm leading-[140%] max-w-[430px] text-left">
          Tem dúvidas sobre nossa plataforma? Aqui estão as perguntas mais
          frequentes dos nossos usuários. Confira as respostas e veja como
          podemos ajudar você a aprimorar suas habilidades de programação!
        </p>
      </header>

      <Questions />
    </section>
  );
}
