import { CallToAction, Faq } from "@/app/(home)/components";
import { GetChallengeQuery } from "@/graphql/generated/graphql";
import { GET_CHALLENGE } from "@/graphql/queries";
import { Client } from "@/lib/graphql-request";
import { notFound } from "next/navigation";
import { Banner } from "./components/banner";
import { ChallengeBody as Body } from "./components/body";
import { ChallengeHeader as Header } from "./components/header";

type ChallengesDetailsPageProps = {
  params: { slug: string };
};

export const revalidate = 0;

export default async function ChallengesDetailsPage({
  params,
}: ChallengesDetailsPageProps) {
  const { challenges } = await Client.request<GetChallengeQuery>(
    GET_CHALLENGE,
    { slug: params.slug }
  );

  const challenge = challenges.at(0);

  if (!challenge) notFound();

  return (
    <main>
      <Banner
        backgroundColor={challenge.bgColor.hex}
        preview={challenge.preview.url}
        title={challenge.title}
      />

      <div className="container py-12">
        <Header
          difficult={challenge.difficult}
          title={challenge.title}
          area={challenge.area}
          figmaUrl={challenge.figmaUrl}
          description={challenge.description}
          author={{
            name: challenge.author,
            role: challenge.role,
            avatar: challenge.avatar?.url,
            social: {
              linkedin: challenge.linkedin,
              portfolio: challenge.portfolio,
              twitter: challenge.twitter,
            },
          }}
        />

        <Body
          descriptionBody={challenge.descriptionBody.html}
          requisitesBody={challenge.requisitesBody.html}
          ideaBody={challenge.ideaBody.html}
        />
      </div>

      <CallToAction />

      <Faq />
    </main>
  );
}
