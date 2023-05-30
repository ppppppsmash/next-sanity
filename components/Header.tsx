import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src='/love~.png'
            width={100}
            height={50}
            alt='logo'
          />
        </Link>
        <h1>Pei</h1>
      </div>
      <div>
        <Link
          href='/'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#93E6B4]
          flex items-center rounded-full text-center'
        >
          楽しい日常
        </Link>
      </div>
    </header>
  )
}
