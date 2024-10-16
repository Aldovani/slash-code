import Image from "next/image";
import Link from "next/link";

import { ChallengeItemProps } from "./challenge-item.types";
import { Badge } from "../badge";
import { RewriteArea } from "@/utils/rewrite-area";

export function ChallengeItem({ data }: ChallengeItemProps) {
  return (
    <Link
      href={`/challenges/${data.slug}`}
      className="group p-4 rounded-lg border border-slate-200  bg-white  w-full transition-all hover:shadow-2xl hover:shadow-slate-200 "
    >
      <div className="relative h-[220px]  w-full object-fill rounded-lg overflow-hidden">
        <Image
          fill
          alt={`challenge ${data.title} preview`}
          src={data.preview}
          className=" group-hover:scale-105 block h-full object-cover absolute inset-0 transition-transform w-full"
        />
      </div>
      <div className=" flex justify-between flex-wrap mt-5">
        <h4 className="text-xl font-medium text-slate-600">{data.title}</h4>
        <div className="flex justify-between gap-2">
          <Badge className="flex items-center  text-xs    px-2 py-1 ">
            {RewriteArea(data.area)}
          </Badge>
          <Badge className="flex items-center  text-xs    px-2 py-1 ">
            {data.difficult}
          </Badge>
        </div>
      </div>
      <p className="max-w-[336px] text-sm  text-slate-400 	mt-4">
        {data.description}
      </p>
    </Link>
  );
}
