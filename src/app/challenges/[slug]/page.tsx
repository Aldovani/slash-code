import { Faq } from "@/components/ui/faq";
import { CallToAction } from "@/components/ui/call-to-action";
import { notFound } from "next/navigation";
import { Banner } from "./components/banner";
import { ChallengeBody as Body } from "./components/body";
import { ChallengeHeader as Header } from "./components/header";
import { Metadata, ResolvingMetadata } from "next";
import { getChallengeBySlug, getSlugList } from "@/services/challenegs";

type ChallengesDetailsPageProps = {
  params: { slug: string };
};

export const revalidate = 2592000;

export async function generateStaticParams() {
  const slugs = await getSlugList();
  return slugs;
}

export async function generateMetadata(
  { params }: ChallengesDetailsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
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
