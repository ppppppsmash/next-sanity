import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-4'>
        <Link
          className='bg-[url("/love~.png")] w-[160px] h-[160px] rounded-full
            flex bg-center shadow-lg'
          href='/'
        >
        </Link>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-amber-300 via-rose-400 to-violet-800
          bg-clip-text tracking-tight text-transparent'>liming.pei</h1>
      </div>
      <div>
        <Link
          href='https://kurosawa-portfolio.vercel.app/'
          target='_blank'
          className='px-5 py-3 text-sm md:text-base bg-gray-950 text-white
          flex items-center rounded-full text-center transition duration-400
          hover:scale-[0.95]'
        >
          Portfolio
        </Link>
      </div>
    </header>
  )
}
