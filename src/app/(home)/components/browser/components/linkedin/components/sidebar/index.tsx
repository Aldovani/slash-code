export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4  sticky top-14 left-0 h-fit">
      <div className="border border-slate-200 rounded-lg bg-white h-[232px]">
        <div className="bg-slate-300 w-full px-3   h-[55px] rounded-t-lg">
          <div className="size-16 bg-slate-300 translate-y-5 rounded-full border-4 border-white" />
        </div>
        <div className="mt-11 flex flex-col gap-2 pl-3">
          <span className="block w-28 h-3 bg-slate-300" />
          <span className="block w-20 h-3 bg-slate-200" />
        </div>
      </div>

      <div className="border border-slate-200 rounded-lg p-4 flex flex-col gap-3 bg-white h-16">
        <span className="block w-28 h-3 bg-slate-300" />
        <span className="block w-20 h-3 bg-slate-200" />
      </div>
      <div className="border border-slate-200 rounded-lg bg-white h-16 p-4 flex flex-col gap-3">
        <span className="block w-28 h-3 bg-slate-300" />
        <span className="block w-20 h-3 bg-slate-200" />
      </div>
      <div className="border border-slate-200 rounded-lg bg-white  p-4 flex flex-col gap-3">
        <span className="block w-28 h-3 bg-slate-300" />
        <span className="block w-24 h-3 bg-slate-200" />
        <span className="block w-16 h-3 bg-slate-200" />
        <span className="block w-14 h-3 bg-slate-200" />
      </div>
    </aside>
  );
}
