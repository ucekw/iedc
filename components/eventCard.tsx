import Image from "next/image";
import React from "react";

function EventCard() {
  return (
    <div className="">
      <div className="bg-[#181818] rounded-lg p-5">
        <div className="p-5 items-center justify-center">
          <Image
            width={200}
            height={200}
            src={""}
            alt={""}
            className=" object-cover mb-4 rounded-lg"
          />
        </div>
        <div className="text-white">

        <h1 className="md:text-3xl text-xl font-semibold">Event Name</h1>
        <p className="md:text-md text-xs">15-06-2024</p>
        <p className="md:text-md text-sm">Event Description: is that uenjern slffnlefni sfkdeins lsf ifjsl</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
