import AsyncStorage from "@react-native-community/async-storage";
import gql from "graphql-tag";

const CATEGORIES_DATA_ID = "CATEGRIES_DATA_ID";
const CATEGORY = "CATEGORY";

const defaultData = [
  {
    id: 0,
    __typename: "Category",
    title: "All Tasks",
    icon: "notebook"
  },
  {
    id: 1,
    __typename: "Category",
    title: "Personal",
    icon: "user"
  },
  // {
  //   id: 2,
  //   __typename: "Category",
  //   title: "Work",
  //   icon: "briefcase"
  // },
  {
    id: 3,
    __typename: "Category",
    title: "Add List",
    icon: "plus"
  }
];

export const getAll = async () => {
  const savedData = await AsyncStorage.getItem(CATEGORIES_DATA_ID);

  if (savedData) {
    try {
      const data = JSON.stringify(savedData);
      return data;
    } catch (e) {}
  }
  return defaultData;
};

export const getItems = async parent => {
  const savedData = await AsyncStorage.getItem(`${CATEGORY}_${parent.id}`);

  if (savedData) {
    try {
      const data = JSON.stringify(savedData);
    } catch (e) {}
  }
  return [];
};

export const getCount = async parent => {
  const items = await getItems(parent);
  return items.length;
};

export const addCategory = async (_, variables, { cache }) => {
  const prevs = cache.readQuery({
    query: gql`
    {
      categories @client {
        title,
        count,
        icon
      }
    }
  `
  });

  const newItem = {
    __typename: 'Category',
    id: variables.id,
    title: variables.title || '',
    icon: variables.icon || 'notebook',
    count: 0,
  }

  const data = {
    categories: [
      ...prevs.categories,
      newItem
    ]
  }

  cache.writeData({data})
}