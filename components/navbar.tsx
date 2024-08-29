import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'

const font = Poppins({ subsets: ['latin'], weight: ['500']})

function Navbar({page}: {page: string}) {
  return (
    <div className={`${font.className}  fixed z-50 bg-gradient-to-r from-[#F4B518]/80 to-[#F2B318]/80 backdrop-blur-sm pb-10 rounded-b-[50px] prevent-select w-full p-4  h-[5rem] flex items-center justify-between px-32 pt-10`}>
        <a href='/' className=''>
            <Image className='w-24 h-24' alt='logo' src='/logo.svg' width={200} height={200} />
        </a>
        <div className='flex gap-8 items-center justify-center'>
            <a href="/" className={`${page == 'home' ? 'text-white':''}`}>Home</a>
            <a href="/events" className={`${page == 'events' ? 'text-white':''}`}>Events</a>
            <a href="/team" className={`${page == 'team' ? 'text-white':''}`}>Team</a>
            <a href="/about" className={`${page == 'about' ? 'text-white':''}`}>About Us</a>
            <button className='px-5 py-2 bg-black text-white rounded-3xl font-[600]'>
                Join
            </button>
        </div>
    </div>
  )
}

export default Navbar