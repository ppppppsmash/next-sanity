'use client'

import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from './sanity.client'

function onPublicAccessOnly() {
  throw new Error('ログインしないとプレビューできない')
}

if(!projectId || !dataset) {
  throw new Error('sanity.jsonと.envを確認してください')
}

export const usePreview = definePreview({
  projectId,
  dataset,
//  onPublicAccessOnly,
})