import { gql } from "graphql-request";

export const GET_ALL_CHALLENGES = gql`
  query getAllChallenges {
    challenges {
      id
      slug
      title
      area
      description
      difficult
      preview {
        url
      }
    }
  }
`;
export const GET_CHALLENGE = gql`
 query getChallenge($slug: String) {
  challenges(where: {slug: $slug}) {
    id
    slug
    difficult
    description
    area
    title
    figmaUrl
    bgColor {
      hex
    }
    screens {
      url
    }
    ideaBody {
      html
    }
    descriptionBody {
      html
    }
    requisitesBody {
      html
    }
  }
}
`;
