import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './navigation';
import { ApolloProvider } from "react-apollo";
import client from './graphql/Client';

export default () => <ApolloProvider client={client}>
  <StatusBar barStyle="light-content" />
  <Navigation />
</ApolloProvider>