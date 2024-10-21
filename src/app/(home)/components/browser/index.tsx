import { tv } from "tailwind-variants";

type BrowserProps = {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
};

const browser = tv({
  base: "shadow-browser  overflow-hidden  border rounded-t-xl border-slate-100 bg-white w-full   md:h-[635px] h-[420px]",
});

export function Browser({ children, className,onClose }: BrowserProps) {
  return (
    <div className={browser({ className })}>
      <div className="flex py-3.5 gap-2 px-5 border-b sticky top-0 left-0 bg-white z-30 border-slate-100">
        <div
          onClick={onClose}
          className="hover:scale-110 transition-transform cursor-pointer size-[10px] rounded-full bg-[#ED4B47] "></div>
        <div className="hover:scale-110 transition-transform cursor-pointer size-[10px] rounded-full bg-[#F19A53]"></div>
        <div className="hover:scale-110 transition-transform cursor-pointer size-[10px] rounded-full bg-[#56A673]"></div>
      </div>
      {children}
    </div>
  );
}
