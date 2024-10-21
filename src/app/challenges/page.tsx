import { RenderList } from "@/components/render-list";
import { ChallengeItem } from "@/components/ui/challenge-item/";
import { Metadata } from "next";
import { getChallenges } from "@/services/challenegs";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Desafios - SlashCode",
  description: "...",
};

export default async function ChallengesPage() {
  const challenges = await getChallenges();

  return (
    <main className="container min-h-[calc(100svh_-_82px_-96px_-36px)]">
      <h1 className="text-3.5xl font-medium mt-9 text-slate-600">Desafios</h1>
      <p className="text-slate-500">
        Desafie suas habilidades e amplie seu conhecimento. Comece agora!
      </p>

      <section className="my-8 grid-cols-1 gap-8 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <RenderList
          data={challenges}
          renderItem={(challenge) => (
            <ChallengeItem
              key={challenge.title}
              data={{
                ...challenge,
                preview: challenge.preview.url,
              }}
            />
          )}
        />
      </section>
    </main>
  );
}
