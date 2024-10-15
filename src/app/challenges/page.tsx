import { RenderList } from "@/components/render-list";
import { ChallengeItem } from "@/components/ui/challenge-item/";
import { Client } from "@/lib/graphql-request";
import { GetAllChallengesQuery } from "@/graphql/generated/graphql";
import { GET_ALL_CHALLENGES } from "@/graphql/queries";

export const revalidate = 0;

export default async function ChallengesPage() {
  const { challenges } = await Client.request<GetAllChallengesQuery>(
    GET_ALL_CHALLENGES
  );

  return (
    <main className="container min-h-[calc(100svh_-_82px_-96px_-36px)]">
      <h1 className="text-3.5xl font-medium mt-9 text-slate-600">Desafios</h1>
      <p className="text-slate-400">
        Worem ipsum dolor sit amet, consectetur adipiscing elit.
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
