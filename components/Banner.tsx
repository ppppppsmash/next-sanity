import React from 'react'

export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>Pei's 日常ブログ</h1>
        <h2 className='mt-5 md:mt-0'>
          ようこそ{' '}
          <span className='underline decoration-4 decoration-[#93E6B4]'>
            かわいい娘
          </span>{' '}
          伊桜ちゃん
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        テキストテキストテキスト
      </p>
    </div>
  )
}
