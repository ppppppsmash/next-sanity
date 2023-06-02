import React from 'react'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import Image from 'next/image'
import { urlFor } from '@/lib/urlFor'

type Props = {
  params: {
    slug: string
  }
}

export default async function Post({ params: { slug }}: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `

  const post: Post = await client.fetch(query, { slug })
  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#93E6B4] text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section>
            <div>
              <div>
                <h1>

                </h1>
                <p>
                  
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}