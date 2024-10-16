import { Browser } from "@/app/(home)/components";
import Image from "next/image";

type BannerProps = {
  backgroundColor: string;
  title: string;
  preview: string;
};

export function Banner({ backgroundColor, title, preview }: BannerProps) {
  return (
    <div style={{ background: backgroundColor }} className="">
      <div className="container pt-16 relative flex  w-full overflow-hidden justify-center items-center   ">
        <Browser className=" !h-[480px] max-w-[80%] ">
          <div className="relative w-full h-full">
            <Image
              src={preview}
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
