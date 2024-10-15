import dynamic from "next/dynamic";
import { Browser } from "../browser";
import { WebSite } from "../browser/components/web-site";
import { Steps } from "./steps";

// const VisualStudioCode = dynamic(
//   () => import("../browser/components/visual-studio-code")
// );

export function HowItWorks() {
  return (
    <section className="container py-16 mt-20 mx-auto">
      <header>
        <span className="text-violet-400 text-[0.875rem]">
          Por Dentro do Slash
        </span>
        <h2 className="text-3.5xl leading-[120%] font-medium text-slate-900 max-w-[470px]">
          Descubra como nossa plataforma funciona{" "}
        </h2>
      </header>
      <div className=" grid lg:grid-cols-[380px_1fr] grid-cols-1 gap-8 mt-12">
        <Steps />

        <div className="bg-slate-50 pl-2 sm:pl-11 md:pl-20 pt-24 rounded-tl-xl">
          <Browser className=" rounded-tr-none">
            <WebSite className="lg:grid-cols-2 grid-cols-1 " />
            {/* <VisualStudioCode /> */}
          </Browser>
        </div>
      </div>
    </section>
  );
}
