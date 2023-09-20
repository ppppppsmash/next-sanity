import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-[#93E6B4] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#93E6B4] mr-2' />
          ページに戻る
        </Link>

        <div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#93E6B4]'>
          <h1 className='font-bold text-white'>
            Pei's 個人ブログ
          </h1>
          <Link
            className='text-#93E6B4 font-bold ml-2'
            href='https://www.xxx'
          >
            xxx
          </Link>
        </div>
      </div>
      {/* sanityのデフォルト検索欄 */}
      <>{props.renderDefault(props)}</>
    </div>
  )
}