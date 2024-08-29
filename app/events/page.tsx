import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { Montserrat } from "next/font/google";
import EventCard from '@/components/eventCard';

const font = Montserrat({ subsets: ["latin"] });

function Page() {
  return (
    <div>
      <Navbar page="events" />
      <div
        className={` ${font.className} bg-black h-full flex flex-col items-center w-full pt-40`}
      >
        <h1 className="text-white text-center md:text-5xl text-3xl font-semibold ">
          Conducted Events
        </h1>
        <span className="w-[30%] h-[1px] bg-[#FBBA1A] mt-10"></span>
        <div className='w-[90%] md:p-10 p-2 pt-10 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Page