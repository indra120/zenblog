import { useRouter } from 'next/router'
import { PostCard, Categories, Loader } from '../../components'
import { fetchCategories, fetchPostsByCategory } from '../../services'

export default function Category({ posts }) {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
          {posts.length == 0 && <div>There are no posts</div>}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const posts = await fetchPostsByCategory(params.slug)

  return {
    props: { posts },
  }
}

export async function getStaticPaths() {
  const categories = await fetchCategories()
  const paths = categories.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true,
  }
}
