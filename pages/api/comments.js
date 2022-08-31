import { GraphQLClient, gql } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_ENDPOINT

export default async function comments(req, res) {
  const { name, email, comment, slug } = req.body
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    },
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `

  try {
    const result = await graphQLClient.request(query, {
      name,
      email,
      comment,
      slug,
    })
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}
