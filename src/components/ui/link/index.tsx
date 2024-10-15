import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { tv, VariantProps } from "tailwind-variants";

const link = tv({
  base: "text-nowrap text-violet-600",
  variants: {
    variants: {
      text: "",
      button:
        "hover:bg-violet-200 transition-colors block w-fit leading-none rounded-lg font-medium  bg-violet-50 ",
      outline:
        "bg-white border border-slate-200 py-3 px-6 rounded-md font-medium hover:bg-violet-600 hover:text-slate-50 hover:border-violet-600 transition-colors",
    },
    size: {
      sm: "text-sm px-4 py-2",
      normal: "px-0 py-0",
      lg: "py-3 px-4 ",
    },
  },
  defaultVariants: {
    variants: "text",
    size: "lg",
  },
});

type LinkProps = {
  children: React.ReactNode;
  className?: string;
} & NextLinkProps &
  VariantProps<typeof link>;

export function Link({
  children,
  variants,
  size,
  className,
  ...rest
}: LinkProps) {
  return (
    <NextLink {...rest} className={link({ className, variants, size })}>
      {children}
    </NextLink>
  );
}
