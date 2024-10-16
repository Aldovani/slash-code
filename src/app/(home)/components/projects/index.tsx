"use client";

import { useScroll, motion } from "framer-motion";

import Ibico from "@/assets/ibico.png";
import houseHunter from "@/assets/house-hunter.png";
import Fintech from "@/assets/Fintech.png";
import Image from "next/image";
import { ComponentRef, useCallback, useEffect, useRef, useState } from "react";

export function Projects() {
  const [axleX, setAxleX] = useState(0);

  const ref = useRef<ComponentRef<"div">>(null);
  const { scrollY } = useScroll({});

  const handleUpdateX = useCallback((e: number) => {
    setAxleX(e - 1300);
  }, []);

  useEffect(() => {
    scrollY.on("change", handleUpdateX);

    () => scrollY.destroy();
  }, [handleUpdateX, scrollY]);

  return (
    <section className="bg-violet-600 w-full pt-[110px] flex justify-start">
      <motion.div
        ref={ref}
        style={{
          x: axleX,
        }}
        className=" left-0 flex items-center relative gap-5 sm:gap-16 w-fit"
      >
        <Image
          src={Ibico}
          alt="ibico project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
        <Image
          src={Fintech}
          alt="FinTech project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
        <Image
          src={houseHunter}
          alt="House-Hunter project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
        <Image
          src={Ibico}
          alt="ibico project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
        <Image
          src={Fintech}
          alt="FinTech project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
        <Image
          src={houseHunter}
          alt="House-Hunter project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
      </motion.div>
    </section>
  );
}
