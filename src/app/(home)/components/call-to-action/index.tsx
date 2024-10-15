import { Link } from "@/components/ui/link";

export function CallToAction() {
  return (
    <section className="bg-indigo-700  md:py-36 py-24 ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="mx-auto lg:text-8xl md:text-5xl !leading-[115%] text-4xl text-white font-bold text-center max-w-[1080px]">
          Comece agora mesmo um desafio!!
        </h2>
        <p className="mt-6 text-slate-200 max-w-[800px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum
          tempore ducimus, perspiciatis eius at exercitationem assumenda
          provident? Architecto a nobis voluptate atque odit optio vero cum
          magnam voluptatibus ea.
        </p>
        <Link href="/challenges" variants="button" className="mt-10">
          Comece agora
        </Link>
      </div>
    </section>
  );
}
