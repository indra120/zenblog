import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_ENDPOINT

export { endpoint, gql, request }

export { default as fetchCategories } from './fetchCategories'
export { default as fetchComments } from './fetchComments'
export { default as fetchFeaturedPosts } from './fetchFeaturedPosts'
export { default as fetchPosts } from './fetchPosts'
export { default as fetchPostsByCategory } from './fetchPostsByCategory'
export { default as fetchPostDetails } from './fetchPostDetails'
export { default as fetchRecentPosts } from './fetchRecentPosts'
export { default as fetchSimilarPosts } from './fetchSimilarPosts'
export { default as submitComment } from './submitComment'
