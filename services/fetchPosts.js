import { endpoint, gql, request } from '.'

export default async function fetchPosts() {
  const query = gql`
    query FetchPosts {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              profilePicture {
                url
              }
            }
            createdAt
            slug
            title
            exerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(endpoint, query)

  return result.postsConnection.edges
}
