import { ReactNode } from "react";
import { RankItem } from "./rank-item";

type RankCardProps = {
  className?: string;
  children: ReactNode;
};

export function RankCard({ className, children }: RankCardProps) {
  return (
    <div className={`bg-white w-[360px] ${className}`}>
      <ul className="flex flex-col gap-2  px-6 border border-slate-200 rounded-lg py-5">
        {children}
      </ul>
    </div>
  );
}
