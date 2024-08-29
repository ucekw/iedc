"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const font = Montserrat({ subsets: ["latin"] });

function HeroSection({ onImagesLoaded }: any) {
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 13; // l number of images

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === totalImages) {
      onImagesLoaded(); // Notify that all images are loaded
    }
  }, [loadedImages, totalImages, onImagesLoaded]);

  return (
    <div
      className={` ${font.className} bg-gradient-to-r from-[#F4B518] to-[#F2B318] w-full h-[50rem]`}
    >
      <Navbar page="home" />
      <div className="w-full flex md:flex-row flex-col ">
        <div className="md:w-[50%] md:h-[50rem] h-[60rem] justify-center items-center flex flex-col md:gap-10 gap-6">
          <div className="md:hidden flex flex-col gap-2 -mt-32 ">
            <div className="flex justify-center">
              <Image
                src={"/images/landing/2.jpg"}
                width={1}
                height={1}
                alt="mision-logo"
                blurDataURL="data:..."
                placeholder="blur"
                quality={10}
                onLoad={handleImageLoad}
                className={`prevent-select  w-32 h-[5rem] object-cover rounded-lg`}
              />
            </div>
            <div className="flex gap-2">
              <Image
                src={"/images/landing/9.jpg"}
                width={1}
                height={1}
                alt="mision-logo"
                blurDataURL="data:..."
                placeholder="blur"
                quality={10}
                onLoad={handleImageLoad}
                className={`prevent-select w-32 h-[5rem] object-cover rounded-lg`}
              />
              <Image
                src={"/images/landing/5.jpg"}
                width={1}
                height={1}
                alt="mision-logo"
                blurDataURL="data:..."
                placeholder="blur"
                quality={10}
                onLoad={handleImageLoad}
                className={`prevent-select  w-32 h-[5rem] object-cover rounded-lg`}
              />
            </div>
          </div>

          <h1 className="font-bold md:text-8xl text-5xl slogan ">
            Create. <br />
            Sustian. <br />
            Thrive. <br />
          </h1>
          <div className="flex md:gap-16 gap-3 md:flex-row flex-col">
            <button className="text-white bg-black font-semibold py-1 md:px-10 px-5 md:text-[16px] text-[13px] rounded-2xl">
              Join Us
            </button>
            <button className="text-black border-2 border-black bg-transparent font-bold py-1 md:px-10 px-5 md:text-[16px] text-[13px] rounded-2xl">
              Live Events
            </button>
          </div>
          <div className="md:hidden flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src={"/images/landing/10.jpg"}
                width={1}
                height={1}
                alt="mision-logo"
                blurDataURL="data:..."
                placeholder="blur"
                quality={10}
                onLoad={handleImageLoad}
                className={`prevent-select w-32 h-[5rem] object-cover rounded-lg`}
              />
              <Image
                src={"/images/landing/13.jpg"}
                width={1}
                height={1}
                alt="mision-logo"
                blurDataURL="data:..."
                placeholder="blur"
                quality={10}
                onLoad={handleImageLoad}
                className={`prevent-select  w-32 h-[5rem] object-cover rounded-lg`}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={"/images/landing/12.jpg"}
                width={1}
                height={1}
                alt="mision-logo"
                blurDataURL="data:..."
                placeholder="blur"
                quality={10}
                onLoad={handleImageLoad}
                className={`prevent-select  w-32 h-[5rem] object-cover rounded-lg`}
              />
            </div>
          </div>
        </div>
        <div className="md:flex hidden gap-3 h-[50rem] md:w-[50%] justify-center items-center mt-8 ">
          <div className="flex flex-col h-[100%] gap-3 justify-center">
            <Image
              src={"/images/landing/1.jpg"}
              width={1}
              height={1}
              alt="mision-logo"
              blurDataURL="data:..."
              placeholder="blur"
              quality={10}
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
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
              onLoad={handleImageLoad}
              className={`prevent-select w-52 h-[7rem] object-cover rounded-lg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
