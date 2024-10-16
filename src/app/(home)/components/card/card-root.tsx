import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const root = tv({
  base: "flex flex-col gap-5  border border-slate-200 p-4 rounded-lg bg-white",
});

type CardRootProps = {
  children: ReactNode;
  className?: string;
};

export function CardRoot({ children, className }: CardRootProps) {
  return <div className={root({ className })}>{children}</div>;
}
