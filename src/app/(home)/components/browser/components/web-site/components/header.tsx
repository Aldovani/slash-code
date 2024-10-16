"use client";

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

import { Link } from "@/components/ui/link";
import { HamburgerButton } from "@/components/ui/header/components/hamburger-button";

import Logo from "@/assets/Logo.svg";


export function WebSiteHeader() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handleToggleOpenCloseNavigation() {
    setIsNavigationOpen((prev) => !prev);
  }

  return (
    <header className="flex justify-between py-3 border-b border-slate-100 px-5 items-center">
      <Image src={Logo} width={90} height={18} alt="Slash code Logo" />
      <nav className="md:flex gap-6 items-center hidden ">
        <NextLink
          href="/"
          className="hover:text-violet-600 text-sm text-slate-400 font-medium"
        >
          Inicio
        </NextLink>
        <NextLink
          href="/challenges"
          className="hover:text-violet-600 text-sm text-violet-600 font-medium"
        >
          Desafios
        </NextLink>

        <NextLink
          href="/blog"
          className="hover:text-violet-600 text-sm text-slate-400 font-medium"
        >
          Blog
        </NextLink>
      </nav>
      <Link href="/challenges" variants="outline" size="sm" className="hidden md:block">
        Começar agora
      </Link>

      <HamburgerButton
        className="w-8 p-2 gap-0.5"
        isOpen={isNavigationOpen}
        onClick={handleToggleOpenCloseNavigation}
      />
    </header>
  );
}
