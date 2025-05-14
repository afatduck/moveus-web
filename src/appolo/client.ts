// src/apollo/client.ts
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const isDev = process.env.NODE_ENV === 'development';
const secure = isDev ? "" : "s";
const apiHost = process.env.REACT_APP_API_HOST ?? 'localhost:8000'

const httpLink = new HttpLink({
    uri: `http:${secure}//${apiHost}/graphql`,
    credentials: 'include'
});


const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws:${secure}//${apiHost}/graphql`
  })
);

const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return def.kind === 'OperationDefinition' && def.operation === 'subscription';
  },
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
