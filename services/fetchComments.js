import { endpoint, gql, request } from '.'

export default async function fetchComments(slug) {
  const query = gql`
    query FetchComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `

  const result = await request(endpoint, query, { slug })

  return result.comments
}
