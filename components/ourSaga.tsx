import React from "react";

import { Montserrat } from "next/font/google";
import Image from "next/image";

const font = Montserrat({ subsets: ["latin"] });

function OurSaga() {
  return (
    <div
      className={` ${font.className} w-full h-full bg-black text-white items-center `}
    >
      <h1 className="text-center text-4xl font-bold pt-20">Our Saga</h1>
      <div className="flex-col gap-6 mt-28">
        <div className="flex  md:flex-row flex-col md:px-16 items-center gap-6">
          <div className="w-[50%] flex flex-col md:px-16" >
            <h1 className="text-2xl font-bold">Our Inception</h1>
            <p className="mt-3 leading-8 text-gray-300">
              University College of Engineering, Karivattom (UCEK) welcomed us
              as we graced the college by establishing the cell in 2020 and the
              investiture of the first executive committee. The incumbent
              exe-com proved their mettle, explored, and went on to leave a
              trail of legacy for the future members to tread upon.
            </p>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <div className="bg-gray-500 w-[24rem] h-[14rem] rounded-lg">

            </div>
            {/* <Image
              src={"/icons/mission.svg"}
              width={130}
              height={130}
              alt="mision-logo"
              className="mb-4 prevent-select "
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSaga;
