import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "text-nowrap   leading-none rounded-lg font-medium  py-3 px-6",
  variants: {
    variants: {
      primary:
        "bg-slate-50  hover:scale-95  transition-all border border-slate-300 text-violet-600",
      outline: "bg-white text-violet-600 border border-slate-200",
    },
  },
  defaultVariants: {
    variants: "primary",
  },
});

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({
  className,
  variants,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ className, variants })}>
      {children}
    </button>
  );
}
