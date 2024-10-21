import Image from "next/image";
import type { Post } from "./posts.data";

type PostProps = {
  post: Post;
};

export function Post({ post }: PostProps) {
  return (
    <article className=" border border-slate-200 rounded-lg bg-white  px-5 py-3 flex flex-col ">
      <header className="flex items-center gap-4">
        <div className="size-10 bg-slate-200 rounded-full" />
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <h4 className="text-sm text-slate-600 font-semibold">
              {post.userName}
            </h4>
            <span className="text-xs text-slate-400">({post.pronouns})</span>
            <span className="text-xs text-slate-400">1°</span>
          </div>
          <span className="text-xs text-slate-400 line-clamp-1">
           {post.title}
          </span>
          <span className="text-xs text-slate-400">1 d </span>
        </div>
      </header>
      <main>
        <p className="text-slate-400 text-sm mt-3 ">{post.text}</p>
        <div className="mt-4 flex flex-col items-center  border border-slate-200 rounded-lg  h-80 ">
          <Image
            src={post.img}
            alt="challenge preview"
            className="rounded-t-lg [clip-path:_circle(80.0%_at_50%_0%)] object-cover bg-slate-50 h-[80%] w-full"
          />
          <span className="font-semibold text-slate-400 mt-2">
            Novo projeto
          </span>
        </div>
      </main>

      <footer>
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center gap-0.5">
            <span className="size-3 rounded-full bg-slate-200 block" />
            <span className="size-3 rounded-full bg-slate-200 block" />
            <span className="size-3 rounded-full bg-slate-200 block" />
            <span className="text-xs text-slate-400 ">10</span>
          </div>
          <span className="text-xs text-slate-400">32 comentários</span>
        </div>
        <hr className="bg-slate-200" />
        <div className="flex justify-between items-center mt-3">
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
      </footer>
    </article>
  );
}
