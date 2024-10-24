import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";

type NavigationItemProps = {
  children: React.ReactNode;
  currentPath: string;
  isDisabled?: boolean;
} & LinkProps &
  ComponentProps<"a">;

export function NavigationItem({
  currentPath,
  children,
  isDisabled,
  ...props
}: NavigationItemProps) {
  const isActive = currentPath === props.href;

  return (
    <li>
      <Link
        {...props}
        data-active={isActive}
        data-disabled={isDisabled}
        className={cn(
          "font-medium  text-slate-400 hover:text-violet-600 data-[active=true]:text-violet-600 data-[disabled=true]:text-slate-300 data-[disabled=true]:cursor-default data-[disabled=true]:pointer-events-none ",
          props.className
        )}
      >
        {children}
      </Link>
    </li>
  );
}
