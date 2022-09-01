import { endpoint, gql, request } from '.'

export default async function fetchSimilarPosts(categories, slug) {
  const query = gql`
    query FetchSimilarPosts($categories: [String!], $slug: String!) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(endpoint, query, { categories, slug })

  return result.posts
}
