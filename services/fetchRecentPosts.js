import { endpoint, gql, request } from '.'

export default async function fetchRecentPosts() {
  const query = gql`
    query FetchRecentPosts {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(endpoint, query)

  return result.posts
}
