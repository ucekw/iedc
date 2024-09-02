import {  getImgLink } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function EventCard({data}:any) {
  return (
    <div >
      <div className="bg-yellow-600 rounded-lg p-5 md:w-[22rem] w-[19rem] ">
        <div className="items-center justify-center bg-black w-full h-[27rem] rounded-lg">
          <Image
            width={200}
            height={200}
            src={getImgLink(data.imageUrl)}
            alt={data[1]}
            className="object-cover mb-4 rounded-lg h-full w-full"
          />
        </div>
        <div className="text-black gap-3 flex flex-col">
          <h1 className="md:text-3xl text-xl font-semibold">{data.name}</h1>
          <p className="md:text-md text-xs">{data.date}</p>
          <p className="md:text-md text-sm">
           {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
