import ApolloClient, { gql } from "apollo-boost";
import resolvers from "./Resolvers";

const client = new ApolloClient({
  resolvers
});

export default client;

global.addCategory = (title, icon) => client.mutate({
  mutation: gql`
    mutation AddCategory($title: String! $icon: String!) {
      addCategory(title: $title, icon: $icon) @client
    }
  `,
  variables: {
    title, icon
  }
});