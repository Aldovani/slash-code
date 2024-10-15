import Ibico from "@/assets/ibico.png";
import houseHunter from "@/assets/house-hunter.png";
import Fintech from "@/assets/Fintech.png";
import Image from "next/image";

export function Projects() {
  return (
    <section
      className="bg-violet-600 w-full  flex items-end  h-fit overflow-x-hidden  pt-[110px]"
    >
      <div className=" flex justify-end gap-5 sm:gap-16 w-fit">
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
      </div>
    </section>
  );
}
