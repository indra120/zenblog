import Image from 'next/image'
import moment from 'moment'
import { DateIcon } from '.'
import getContentFragment from '../helpers/getContentFragment'

export default function PostDetail({ post }) {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          layout='fill'
        />
      </div>

      <div className='px-4 lg:px-0'>
        <div className='flex items-center justify-center lg:justify-start mb-8 w-full'>
          <div className='flex items-center lg:mb-0 lg:w-auto mr-8'>
            <Image
              src={post.author.profilePicture.url}
              alt={post.author.name}
              height={30}
              width={30}
              className='align-middle'
            />

            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
              {post.author.name}
            </p>
          </div>

          <div className='font-medium text-gray-700'>
            <DateIcon />
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>

        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>

        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}
