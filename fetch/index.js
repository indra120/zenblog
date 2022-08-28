import { gql, request } from 'graphql-request'

const endpoint = process.env.HYGRAPH_CONTENT_API_ENDPOINT

export { endpoint, gql, request }

export { default as fetchPosts } from './fetchPosts'
