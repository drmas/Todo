import ApolloClient, { gql, InMemoryCache } from "apollo-boost";
import resolvers from "./Resolvers";
import AsyncStorage from "@react-native-community/async-storage";
import dayjs from "dayjs";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers
});


let defaultData = {
  categories: [
    {
      id: 0,
      __typename: "Category",
      title: "All Tasks",
      icon: "notebook",
      items: [],
      count: 0
    },
    {
      id: 1,
      __typename: "Category",
      title: "Personal",
      icon: "user",
      items: [],
      count: 0
    }
  ]
};

cache.writeData({
  data:defaultData
})

client.onResetStore(() => cache.writeData({ data: defaultData }));

export default client;
global.client;

global.addCategory = (title, icon) =>
  client.mutate({
    mutation: gql`
      mutation AddCategory($title: String!, $icon: String!) {
        addCategory(title: $title, icon: $icon) @client
      }
    `,
    variables: {
      title,
      icon
    }
  });

global.addItem = (categoryId, title, subtitle, date) =>
  client.mutate({
    mutation: gql`
      mutation AddItem($title: String!, $subtitle: String!, $date: String!, $categoryId: String!) {
        addItem(
          title: $title,
          subtitle: $subtitle,
          date: $date,
          categoryId: $categoryId,
          ) @client
      }
    `,
    variables: {
      title,
      subtitle,
      categoryId,
      date: dayjs(date).format('HH:MM'),
    }
  });
