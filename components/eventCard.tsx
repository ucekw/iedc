import {  getImg } from "@/lib/data";
import { get } from "http";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function EventCard({data}: {data: string[]}) {


   
  return (
    <div className="">
      <div className="bg-yellow-600 rounded-lg p-5 md:w-[22rem] w-[19rem] ">
        <div className="p-5 items-center justify-center">
          <Image
            width={200}
            height={200}
            src={getImg(data[2])}
            alt={data[1]}
            className=" object-cover mb-4 rounded-lg"
          />
        </div>
        <div className="text-black gap-3 flex flex-col">
          <h1 className="md:text-3xl text-xl font-semibold">{data[1]}</h1>
          <p className="md:text-md text-xs">{data[0]}</p>
          <p className="md:text-md text-sm">
           {data[3]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
