"use client";
import React, { useState } from "react";
import Navbar from "./navbar";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const font = Montserrat({ subsets: ["latin"] });

function HeroSection() {
  return (
    <div
      className={` ${font.className} bg-gradient-to-r from-[#F4B518] to-[#F2B318] w-full h-[50rem]`}
    >
      <Navbar page="home" />
      <div className="w-full flex md:flex-row flex-col ">
        <div className="w-[50%] h-[50rem] justify-center items-center flex flex-col gap-10">
          <h1 className="font-bold text-8xl slogan">
            Create. <br />
            Sustian. <br />
            Thrive. <br />
          </h1>
          <div className="flex gap-16">
            <button className="text-white bg-black font-semibold py-1 px-10 rounded-2xl">
              Join Us
            </button>
            <button className="text-black border-2 border-black bg-transparent font-bold py-1 px-7 rounded-2xl">
              Live Events
            </button>
          </div>
        </div>
        <div className="flex gap-3 h-[50rem] w-[50%] justify-center items-center mt-8 ">
          <div className="flex flex-col h-[100%] gap-3 justify-center">
            <Image
              src={"/images/landing/1.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur"
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/2.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10}  
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/3.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/4.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
          </div>
          <div className="flex flex-col h-[90%] gap-3 justify-center">
            <Image
              src={"/images/landing/5.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/6.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/7.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/8.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/9.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
          </div>
          <div className="flex flex-col h-[90%] gap-3 justify-center">
            <Image
              src={"/images/landing/10.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/11.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/12.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
            <Image
              src={"/images/landing/13.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur" 
              quality={10} 
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
