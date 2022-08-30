import { endpoint, gql, request } from '.'

export default async function fetchPosts(slug) {
  const query = gql`
    query FetchPostDetails($slug: String) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `

  const result = await request(endpoint, query, { slug })

  return result.post
}
