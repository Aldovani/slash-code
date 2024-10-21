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
      <div className="container md:pt-16 pt-8 relative flex  w-full overflow-hidden justify-center items-center   ">
        <Browser className=" !max-h-[240px] sm:!max-h-[320px] lg:!max-h-[480px] md:max-w-[80%] w-full aspect-video">
          <div className="relative w-full h-full">
            <Image
              src={preview}
              alt={`${title} preview`}
              fill
              className="top-0 inset-0 object-fill"
            />
          </div>
        </Browser>
      </div>
    </div>
  );
}
