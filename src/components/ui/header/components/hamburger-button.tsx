import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

type HamburgerButtonProps = {
  isOpen: boolean;
} & ButtonProps;

export function HamburgerButton({
  isOpen,
  onClick,
  className,
  variants = "outline",
  ...props
}: HamburgerButtonProps) {
  return (
    <Button
      variants={variants}
      data-is-open={isOpen}
      className={cn(
        "group relative flex flex-col w-12 gap-1.5 group p-2 py-4   md:hidden max-md:data-[is-navigation-open=true]:fixed max-md:data-[is-navigation-open=true]:top-4 max-md:data-[is-navigation-open=true]:right-4",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span className="block w-full h-0.5 bg-slate-400 group-hover:bg-slate-600 group-data-[is-open=true]:-rotate-[45deg] group-data-[is-open=true]:translate-y-[4.5px] transition-all"></span>

      <span className="block w-full h-0.5 bg-slate-400 group-hover:bg-slate-600 group-data-[is-open=true]:hidden"></span>

      <span className="block w-full h-0.5 bg-slate-400 group-hover:bg-slate-600 group-data-[is-open=true]:rotate-[45deg] group-data-[is-open=true]:-translate-y-[3px] transition-all"></span>
    </Button>
  );
}
