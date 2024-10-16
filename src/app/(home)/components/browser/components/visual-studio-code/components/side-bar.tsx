import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Blocks, BugPlay, Files, GitMerge, Search } from "lucide-react";

export function VisualStudioCodeSideBar() {
  return (
    <aside className="w-full row-start-1 row-end-3    col-start-1 col-end-2 bg-slate-900 h-full">
      <TooltipProvider>
        <nav className="flex flex-col gap-8 items-center w-full pt-5">
          <Tooltip>
            <TooltipTrigger>
              <Files className="size-8  text-slate-50 cursor-pointer transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Files</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Search className="size-8  text-slate-300 hover:text-slate-50 cursor-pointer transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Search</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <GitMerge className="size-8  text-slate-300 hover:text-slate-50 cursor-pointer transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Git</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <BugPlay className="size-8  text-slate-300 hover:text-slate-50 cursor-pointer transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>BUg</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Blocks className="size-8  text-slate-300 hover:text-slate-50 cursor-pointer transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Explorer</p>
            </TooltipContent>
          </Tooltip>

          <span></span>
        </nav>
      </TooltipProvider>
    </aside>
  );
}
