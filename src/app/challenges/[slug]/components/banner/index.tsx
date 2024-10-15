import { Browser } from "@/app/(home)/components";
import Image from "next/image";

type BannerProps = {
  backgroundColor: string;
  title: string;
  screens: string[];
};

export function Banner({ backgroundColor, title, screens }: BannerProps) {
  return (
    <div style={{ background: backgroundColor }} className="">
      <div className="container pt-16 relative flex  w-full overflow-hidden justify-center items-center   ">
        <Browser className=" !h-[480px] max-w-[80%] ">
          <div className="relative w-full h-full">
            <Image
              src={screens[0]}
              alt={`${title} screen 1`}
              fill
              className="top-0 inset-0 object-fill"
            />
          </div>
        </Browser>
      </div>
    </div>
  );
}
