"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

import image1 from "../public/images/landing/1.jpg";
import image2 from "../public/images/landing/2.jpg";
import image3 from "../public/images/landing/3.jpg";
import image4 from "../public/images/landing/4.jpg";
import image5 from "../public/images/landing/5.jpg";
import image6 from "../public/images/landing/6.jpg";
import image7 from "../public/images/landing/7.jpg";
import image8 from "../public/images/landing/8.jpg";
import image9 from "../public/images/landing/9.jpg";
import image10 from "../public/images/landing/10.jpg";
import image11 from "../public/images/landing/11.jpg";
import image12 from "../public/images/landing/12.jpg";
import image13 from "../public/images/landing/13.jpg";

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
                src={image1}
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
                src={image9}
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
                src={image5}
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
                src={image10}
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
                src={image13}
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
                src={image12}
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
              src={image1}
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
              src={image2}
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
              src={image3}
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
              src={image4}
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
              src={image5}
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
              src={image6}
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
              src={image7}
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
              src={image8}
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
              src={image9}
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
              src={image10}
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
              src={image11}
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
              src={image12}
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
              src={image13}
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
