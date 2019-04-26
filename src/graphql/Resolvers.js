import { getAll, getCount, getItems, addCategory } from "./models/Category";

export default {
  Query: {
    categories: getAll
  },
  Category: {
    count: getCount,
    items: getItems,
  },
  Mutation: {
    addCategory: addCategory,
  }
}