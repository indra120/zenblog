import { endpoint, gql, request } from '.'

export default async function fetchRecentPosts() {
  const query = gql`
    query FetchCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(endpoint, query)

  return result.categories
}
