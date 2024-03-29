import { draftMode } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
import PreviewBlogList from '@/components/PreviewBlogList'
import BlogList from '@/components/BlogList'

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export const revalidate = 30

export default async function Home() {
  const posts = await client.fetch(query)
  console.log(posts)

  if(draftMode()) {
    return (
      <PreviewSuspense fallback={(
        <div role='status'>
          <p className='text-center text-lg animate-pulse text-amber-400'>
            Loading Data...
          </p>
        </div>
      )}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  

  return (
    <BlogList posts={posts} />
  )
}
