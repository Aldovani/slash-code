"use client";

import { motion } from "framer-motion";

import Ibico from "@/assets/ibico.png";
import houseHunter from "@/assets/house-hunter.png";
import Fintech from "@/assets/Fintech.png";
import EZ from "@/assets/ez.png";
import Nullbank from "@/assets/nullbank.png";
import Image from "next/image";
import { useProjectModel } from "./project.module";

export function Projects() {
  const { axleX, ref } = useProjectModel();

  return (
    <section className="bg-violet-600 w-full pt-16 md:pt-[110px] overflow-x-hidden flex justify-start">
      <motion.figure
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
          src={EZ}
          alt="ibico project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
        <Image
          src={Nullbank}
          alt="FinTech project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
        <Image
          src={houseHunter}
          alt="House-Hunter project"
          className="w-52 md:w-72 lg:w-[450px]"
        />
      </motion.figure>
    </section>
  );
}
