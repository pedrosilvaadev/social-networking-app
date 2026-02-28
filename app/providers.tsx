"use client";

import { makeApolloClient } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { useMemo } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const client = useMemo(() => makeApolloClient(), []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
