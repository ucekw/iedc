import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'

const font = Poppins({ subsets: ['latin'], weight: ['500']})

function Navbar() {
  return (
    <div className={`${font.className} prevent-select w-full p-4 bg-transparent h-[5rem] flex items-center justify-between px-32 pt-10`}>
        <div className=''>
            <Image className='w-24 h-24' alt='logo' src='/logo.svg' width={200} height={200} />
        </div>
        <div className='flex gap-8 items-center justify-center'>
            <a href="">Home</a>
            <a href="">Events</a>
            <a href="">Team</a>
            <a href="">About Us</a>
            <button className='px-5 py-2 bg-black text-white rounded-3xl font-[600]'>
                Join
            </button>
        </div>
    </div>
  )
}

export default Navbar