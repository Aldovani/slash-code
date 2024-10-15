"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";

import Logo from "@/assets/Logo.svg";
import { Navigation } from "./components/navigation";
import { Link } from "../link";
import { HamburgerButton } from "../header/components/hamburger-button";

export function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handleToggleOpenCloseNavigation() {
    setIsNavigationOpen((prev) => !prev);
  }

  function handleCloseNavigation() {
    setIsNavigationOpen(false);
  }

  return (
    <header className="border-b border-slate-100 bg-white sticky top-0 left-0 w-full z-50">
      <div className=" px-4 md:px-8 lg:px-16 mx-auto py-4 flex justify-between items-center">
        <NextLink href="/">
          <Image src={Logo} alt="SlashCode Logo" />
        </NextLink>

        <Navigation
          isOpen={isNavigationOpen}
          onHandleCloseNavigation={handleCloseNavigation}
        />

        <Link href="/challenges" variants="outline" className="md:block hidden">
          Começar agora
        </Link>

        <HamburgerButton
          isOpen={isNavigationOpen}
          onClick={handleToggleOpenCloseNavigation}
        />
      </div>
    </header>
  );
}
