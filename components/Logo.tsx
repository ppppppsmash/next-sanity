import { CommandLineIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

export function Logo(props: any) {
  const { renderDefault, title} = props

  return (
    <div className=''>
      <div className='flex items-center space-x-2 h-26 w-26'>
        <CommandLineIcon className='text-[#93E6B4] block' />
        {/* title */}
        <div className='w-[200px]'>{renderDefault(props)}</div>
      </div>
      
    </div>
  )
}