import {
  GetAllChallengesQuery,
  GetAllChallengesSlugsQuery,
  GetChallengeQuery,
} from "@/graphql/generated/graphql";
import {
  GET_ALL_CHALLENGES,
  GET_ALL_CHALLENGES_SLUG,
  GET_CHALLENGE,
} from "@/graphql/queries";
import { Client } from "@/lib/graphql-request";

type GetChallengesProps = {
  perPage?: number | undefined;
};

export async function getChallengeBySlug(slug: string) {
  const { challenges } = await Client.request<GetChallengeQuery>(
    GET_CHALLENGE,
    { slug }
  );

  return challenges.at(0);
}

export async function getSlugList() {
  const { challenges } = await Client.request<GetAllChallengesSlugsQuery>(
    GET_ALL_CHALLENGES_SLUG
  );

  return challenges.map((challenges) => challenges.slug);
}

export async function getChallenges(
  props: GetChallengesProps = {
    perPage: undefined,
  }
) {
  const { challenges } = await Client.request<GetAllChallengesQuery>(
    GET_ALL_CHALLENGES,
    {
      first: props.perPage,
    }
  );

  return challenges;
}
