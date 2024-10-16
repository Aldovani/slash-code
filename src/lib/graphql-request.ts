import { GraphQLClient } from "graphql-request";

export const Client = new GraphQLClient(process.env.GRAPHQL_HOST!, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN!}`,
  },
});
