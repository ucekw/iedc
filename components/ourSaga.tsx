import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import image1 from "../public/images/saga/1.jpg";
import image2 from "../public/images/saga/2.jpg";
import image3 from "../public/images/saga/3.jpg";

const font = Montserrat({ subsets: ["latin"] });

function OurSaga() {
  return (
    <div
      className={` ${font.className} w-full h-full bg-black text-white items-center `}
    >
      <h1 className="text-center text-4xl font-bold pt-20">Our Saga</h1>
      <div className="flex flex-col gap-y-20 md:mt-28 mt-10 items-center">
        <div className="flex  md:flex-row flex-col md:px-16 items-center gap-6">
          <div className="md:w-[50%] w-full px-10 flex flex-col md:px-16">
            <h1 className="text-2xl font-bold">Our Inception</h1>
            <p className="mt-3 leading-8 text-gray-300 text-[14px] md:text-[16px]">
              University College of Engineering, Karivattom (UCEK) welcomed us
              as we graced the college by establishing the cell in 2020 and the
              investiture of the first executive committee. The incumbent
              exe-com proved their mettle, explored, and went on to leave a
              trail of legacy for the future members to tread upon.
            </p>
          </div>
          <div className="md:w-[50%] w-full  flex items-center justify-center">
            <div className="w-[15rem] md:w-[31rem] rounded-lg flex items-center justify-center">
              <Image
                src={image1}
                width={130}
                height={130}
                alt="mision-logo"
                className="mb-4 prevent-select w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex  md:flex-row-reverse flex-col md:px-16 items-center gap-6">
          <div className="md:w-[50%] w-full px-10 flex flex-col md:px-16">
            <h1 className="text-2xl font-bold md:text-right">So Far So Good</h1>
            <p className="mt-3 leading-8 text-gray-300 md:text-right text-[14px] md:text-[16px]">
              We have displayed our worth on various fronts. We have
              successfully organized districtwide, statewide, and national
              events including hands-on workshops, hackathons, ideathons, talks,
              masterclasses, mentorship programmes, talent searches, and
              non-technical events. We take pride in being able to collaborate
              with other cells and communities of the college to have come so
              far and to keep going.
            </p>
          </div>
          <div className="md:w-[50%] w-full  flex items-center justify-center">
            <div className="w-[15rem] md:w-[31rem] rounded-lg flex items-center justify-center">
              <Image
                src={image2}
                width={130}
                height={130}
                alt="mision-logo"
                className="mb-4 prevent-select w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col md:px-16 items-center gap-6">
          <div className="md:w-[50%] w-full px-10 flex flex-col md:px-16">
            <h1 className="text-2xl font-bold">Defining The Future</h1>
            <p className="mt-3 leading-8 text-gray-300 text-[14px] md:text-[16px]">
              The legacy will be preserved by our lineage. Legacy-IEDC-UCEK will
              revolutionize the startup ecosystem globally starting with Kerala.
              We will strive to identify, grow and produce entrepreneurs who
              will shape the world.
            </p>
          </div>
          <div className="md:w-[50%] w-full  flex items-center justify-center">
            <div className="w-[15rem] md:w-[31rem] rounded-lg flex items-center justify-center">
              <Image
                src={image3}
                width={130}
                height={130}
                alt="mision-logo"
                className="mb-4 prevent-select w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <span className="w-[50%] h-[1px] bg-[#FBBA1A] mt-20"></span>
      </div>
    </div>
  );
}

export default OurSaga;
