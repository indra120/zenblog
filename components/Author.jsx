import Image from 'next/image'

export default function Author({ author }) {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-2 -top-12'>
        <Image
          src={author.profilePicture.url}
          alt={author.name}
          height={80}
          width={80}
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}
