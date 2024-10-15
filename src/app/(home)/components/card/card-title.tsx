import { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";

const title = tv({ base: "text-xl font-medium text-slate-500" });

type CardTitleProps = {
  children: ReactNode;
} & ComponentProps<"h3">;

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3 {...props} className={title({ className })}>
      {children}
    </h3>
  );
}
