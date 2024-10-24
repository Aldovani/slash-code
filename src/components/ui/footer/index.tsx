import Link from "next/link";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 w-full bg-white">
      <div className="px-16 mx-auto py-8 flex justify-between items-start flex-col md:flex-row gap-5 max-md:items-center">
        <Link href="/" className="w-fit inline-block">
          <Image src={Logo} alt="SlashCode Logo" />
        </Link>

        <p className="text-slate-500 text-center">
          © 2024 Slashcode. Todos os direitos reservados.
        </p>

        <p className="text-slate-500 font-medium">
          Desenvolvido por
          <a
            target="_blank"
            href="https://aldovani.github.io/portfolio/"
            className=" text-violet-600"
          >
            {" "}
            Aldovani
          </a>
        </p>
      </div>
    </footer>
  );
}
