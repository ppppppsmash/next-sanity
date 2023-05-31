import { draftMode } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export default async function Home() {
  const posts = await client.fetch(query)
  console.log(posts)

  if(draftMode()) {
    return (
      <PreviewSuspense fallback={(
        <div role='status'>
          <p className='text-center text-lg animate-pulse text-[#93E6B4]'>
            Loading Preview Data...
          </p>
        </div>
      )}>
      </PreviewSuspense>
    )
  }

  

  return (
    <div>
      <h1>{posts}</h1>
    </div>
  )
}
