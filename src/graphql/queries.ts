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
    challenges(where: { slug: $slug }) {
      id
      slug
      difficult
      description
      area
      figmaUrl
      author
      linkedin
      portfolio
      role
      title
      twitter
      avatar {
        url
      }
      bgColor {
        hex
      }
      ideaBody {
        html
      }
      preview {
        url
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
