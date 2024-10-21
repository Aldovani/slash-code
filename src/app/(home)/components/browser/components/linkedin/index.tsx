import { RenderList } from "@/components/render-list";
import { NewPost } from "./components/new-post";
import { News } from "./components/news";
import { Post } from "./components/post";
import { Sidebar } from "./components/sidebar";
import { POSTS } from "./components/post/posts.data";

export function LinkedinPage() {
  return (
    <>
      <div className="bg-slate-50 px-8  w-full h-auto gap-x-6 grid grid-cols-[.5fr_1fr_0.5fr]">
        <Sidebar />

        <main className="mt-4">
          <NewPost />

          <div className="flex flex-col gap-6 mt-8">
            <RenderList
              data={POSTS}
              renderItem={(data) => <Post post={data} key={data.userName} />}
            />
          </div>
        </main>

        <News />
      </div>
    </>
  );
}
