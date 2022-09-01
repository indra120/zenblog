import { endpoint, gql, request } from '.'

export default async function fetchFeaturedPosts() {
  const query = gql`
    query FetchFeaturedPosts {
      posts(where: { featuredPost: true }) {
        author {
          name
          profilePicture {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }
  `

  const result = await request(endpoint, query)

  return result.posts
}
