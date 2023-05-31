import { urlFor } from "@/lib/urlFor"
import Image from "next/image"

type Props = {
  posts: Post[]
}
export default function BlogList({ posts }: Props) {
  console.log(posts.length)
  return (
    <div>
      <hr className='border-[#93E6B4] mb-10' />

      <div>
        {posts.map((post) => (
          <div
            className='group flex-col cursor-pointer'
            key={post._id}>
            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105
              transition-transform duration-200 ease-out'>
              <Image
                className='object-cover object-left lg:object-center'
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className='absolute bottom-0 w-full bg-opacity-20 bg-black
                backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                <div>
                  <p className='font-bold'>{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString
                    ('ja-JP', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })
                    }
                  </p>
                </div>

                <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                    {post.categories.map((category) => (
                      <div className='bg-[#93E6B4] text-center text-black px-3
                        py-1 rounded-full text-sm font-semibold'
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className='mt-5 flex-1'>
              <p className='underline text-lg font-bold'>{post.title}</p>
              <p className='line-clamp-2 text-gray-500'>{post.description}</p>
            </div>

            <p>
              Read Post
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
