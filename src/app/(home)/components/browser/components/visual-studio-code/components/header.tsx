import { ReactLogoIcon } from "@/assets/icons/react-icon";

export function VisualStudioCodeHeader() {
  return (
    <header className="row-start-1 row-end-2 col-start-2 col-end-3 bg-slate-100 flex items-center ">
      <nav className="h-full flex ">
        <div className="flex items-center gap-2  h-full pl-4 pr-8 bg-slate-50 ">
          <ReactLogoIcon width={16} height={16} />
          <span className="text-slate-700 text-sm">SlashCode.tsx</span>
        </div>
        <div className="flex items-center gap-2  h-full pl-4 pr-8  bg-slate-50 transition-colors cursor-pointer   ">
          <ReactLogoIcon width={16} height={16} />
          <span className="text-slate-700 text-sm">NaNet.tsx</span>
        </div>
      </nav>
    </header>
  );
}
