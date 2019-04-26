import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './navigation';
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import client from './graphql/Client';

export default () => <ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <StatusBar barStyle="light-content" />
    <Navigation />
  </ApolloHooksProvider>
</ApolloProvider>