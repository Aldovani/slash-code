import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const content = tv({
  base: "bg-slate-50 w-full flex-1   rounded-lg",
});

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export function CardContent({ children, className }: CardContentProps) {
  return <div className={content({ className })}>{children}</div>;
}
