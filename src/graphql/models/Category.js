import gql from "graphql-tag";

const AllCategoriesQuery = gql`
    query AllCategories {
      categories {
        id
        __typename
        title,
        count,
        icon,
        count,
        items {
          id
          __typename,
          title,
          subtitle,
          date,
          done
        }
      }
    }
  `

export const addCategory = async (_, variables, { cache }) => {
  const prevs = cache.readQuery({
    query: gql`
    {
      categories @client {
        id
        title,
        count,
        icon,
        count,
        items
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

export const addItem = async (_, { categoryId, title, subtitle, date }, { cache, getCacheKey }) => {
  
  const {categories} = cache.readQuery({
    query: AllCategoriesQuery,
  })

  console.log(categories);

  const category = categories.find(i => i.id === categoryId);

  category.items.push({
    id: category.items.length,
    __typename: 'Todo',
    title,
    subtitle,
    date,
    done: false
  })

  category.count = category.items.length

  cache.writeData({
    data: {
      categories,
    }
  })
}