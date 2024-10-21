export function NewPost() {
  
  return(  <div className="border border-slate-200 rounded-lg bg-white  px-5 py-3 flex flex-col gap-3">
    <div className="inline-flex    gap-3">
      <div className="size-10 bg-slate-200 rounded-full" />
      <div className="flex-1 border border-slate-200 rounded-full py-2 px-4 text-sm" >
        <p className="text-slate-400">Comece uma publicação</p>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="size-6 rounded-md bg-slate-200" />
        <span className="w-12 bg-slate-200 h-3 rounded-sm" />
      </div>
      <div className="flex items-center gap-3">
        <div className="size-6 rounded-md bg-slate-200" />
        <span className="w-12 bg-slate-200 h-3 rounded-sm" />
      </div>
      <div className="flex items-center gap-3">
        <div className="size-6 rounded-md bg-slate-200" />
        <span className="w-12 bg-slate-200 h-3 rounded-sm" />
      </div>
    </div>
  </div>)
}