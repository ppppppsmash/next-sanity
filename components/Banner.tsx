import React from 'react'

export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-4xl'>
          <span className='group'>
            <span className='font-mono'>&lt;</span>エンジニア<span className='font-mono'>/&gt;</span>
            <span
              className='invisible inline-flex text-zinc-500 before:content-["|"]
              group-hover:visible group-hover:animate-typing'
            >
            </span>
          </span>{' '},
          <span className='bg-gradient-to-r from-amber-300 text-transparent
          via-rose-400 to-violet-800 bg-clip-text tracking-tight'>
            {' '}liming.pei
          </span>
          's Blog</h1>
        <h2 className='mt-5 md:mt-2'>
          <span className='underline decoration-4 decoration-amber-300'>
            かわいい娘
          </span>
          の成長を見る毎日は幸せ〜🫶
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        日々スキルアップ
      </p>
    </div>
  )
}
