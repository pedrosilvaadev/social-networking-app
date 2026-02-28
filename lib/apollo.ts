import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function makeApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      credentials: "include",
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            feed: {
              keyArgs: false,
              merge(existing = { edges: [] }, incoming) {
                return {
                  ...incoming,
                  edges: [...existing.edges, ...incoming.edges],
                };
              },
            },
          },
        },
      },
    }),
  });
}
