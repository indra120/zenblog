import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import { fetchRecentPosts, fetchSimilarPosts } from '../fetch'

export default function PostWidget({ categories, slug }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (slug) {
      fetchSimilarPosts(categories, slug).then(result => setPosts(result))
    } else {
      fetchRecentPosts().then(result => setPosts(result))
    }
  }, [categories, slug])

  // console.log(posts)

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {posts.map(post => (
        <div key={post.slug} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              width={60}
              height={60}
              objectFit='cover'
              className='rounded-full'
            />
          </div>

          <div className="flex-grow ml-4">
            <p className='text-gray-500 font-xs'>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className='text-md'>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
