import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "capitalize font-semibold bg-violet-100 text-violet-600 px-2 py-0.5 rounded-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
