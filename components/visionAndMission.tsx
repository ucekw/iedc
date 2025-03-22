import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import visionImg from '../public/icons/vision.svg'
import missionImg from '../public/icons/mission.svg'

const font = Montserrat({ subsets: ["latin"] });

function VisionAndMission() {
  return (
    <div
      className={` ${font.className} h-full bg-gradient-to-r from-[#F4B518] to-[#F2B318] flex flex-col`}
    >
      <div className="flex flex-col items-center w-full">
        <div className="bg-black w-full  md:rounded-t-[100px] rounded-t-[50px] flex flex-col items-center gap-44">
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col items-center px-[5rem] lg:px-[15.4rem] md:w-[50%] mt-36">
              <Image
                src={visionImg}
                width={150}
                height={150}
                alt="vision-logo"
                className="prevent-select "
              />
              <h1 className="text-white text-xl text-center font-bold">
                Vision
              </h1>
              <p className="text-white text-center text-base font-medium mt-4">
                We strive to help students have a vision of their own
              </p>
              <span className="w-16 h-[2.5px] bg-[#FBBA1A] my-4"></span>
              <p className="text-white text-center text-[13px] font-medium">
                Our vision is to inculcate amongst budding entrepreneurs, the
                rigor and conviction in their ideas to go out there to make a
                mark.
              </p>
            </div>
            <div className="flex flex-col items-center  px-[5rem] lg:px-[15.4rem] md:w-[50%] mt-[9.5rem]">
              <Image
                src={missionImg}
                width={130}
                height={130}
                alt="mision-logo"
                className="mb-4 prevent-select "
              />

              <h1 className="text-white text-xl text-center font-bold mt-4 ">
                Mission
              </h1>
              <p className="text-white text-center text-base font-medium mt-4">
                We grant a platform for innovators to express themselves and
                upscale
              </p>
              <span className="w-16 h-[2.5px] bg-[#FBBA1A] my-4"></span>
              <p className="text-white text-center text-[13px] font-medium">
                Our mission, put into perspective, is to lend a hand to emerging
                and struggling entrepreneurs to help them realize their vision.
              </p>
            </div>
          </div>
          <span className="w-[50%] h-[1px] bg-[#FBBA1A] "></span>
        </div>
      </div>
    </div>
  );
}

export default VisionAndMission;
