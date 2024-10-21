import { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";

const description = tv({ base: "text-slate-500 text-[0.875rem] mt-2" });

type CardDescriptionProps = {
  children: ReactNode;
} & ComponentProps<"p">;

export function CardDescription({
  children,
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p className={description({ className })} {...props}>
      {children}
    </p>
  );
}
