import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { getChallengeBySlug, getSlugList } from "@/services/challenegs";

import { Faq } from "@/components/ui/faq";
import { CallToAction } from "@/components/ui/call-to-action";

import { ChallengeHeader as Header } from "./components/header";
import { ChallengeBody as Body } from "./components/body";
import { Banner } from "./components/banner";

type ChallengesDetailsPageProps = {
  params: { slug: string };
};

export const revalidate = 2592000;

export async function generateStaticParams() {
  const slugs = await getSlugList();
  return slugs;
}

export async function generateMetadata({
  params,
}: ChallengesDetailsPageProps): Promise<Metadata> {
  const challenge = await getChallengeBySlug(params.slug);
  return {
    title: `${challenge?.title} - SlashCode`,
    description: challenge?.description,
    openGraph: { images: challenge?.preview },
  };
}

export default async function ChallengesDetailsPage({
  params,
}: ChallengesDetailsPageProps) {
  const challenge = await getChallengeBySlug(params.slug);

  if (!challenge) notFound();

  const challengeContentHeader = {
    area: challenge.area,
    difficult: challenge.difficult,
    description: challenge.description,
    title: challenge.title,
    figmaUrl: challenge.figmaUrl,
    author: {
      name: challenge.author,
      role: challenge.role,
      avatar: challenge.avatar?.url,
      social: {
        linkedin: challenge.linkedin,
        portfolio: challenge.portfolio,
        twitter: challenge.twitter,
      },
    },
  };

  return (
    <main>
      <Banner
        backgroundColor={challenge.bgColor.hex}
        preview={challenge.preview.url}
        title={challenge.title}
      />

      <div className="container sm:py-12 py-8">
        <Header data={challengeContentHeader}></Header>

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
