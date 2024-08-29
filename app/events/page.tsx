import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

function Page() {
  return (
    <div>
      <Navbar page="events" />
      <div
        className={` ${font.className} bg-black h-full flex flex-col items-center w-full pt-40`}
      >
        <h1 className="text-white text-center text-5xl font-semibold ">
          Executive Committee
        </h1>
        <span className="w-[30%] h-[1px] bg-[#FBBA1A] mt-10"></span>

        
      </div>
      <Footer />
    </div>
  )
}

export default Page