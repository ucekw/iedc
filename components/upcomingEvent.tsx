"use client";
import { getImgLink, getUpcomingEvent } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import moment from "moment";
import CountDown from "./ui/countDown";

const font = Montserrat({ subsets: ["latin"] });

function UpcomingEvent() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUpcomingEvent().then((response) => {
      setData(response);

      console.log(response);

      setLoading(false);
    });
  }, []);

  return (
    <div className={`flex flex-col gap-3 ${font.className} bg-black justify-center items-center pt-10`}>
      {data?.length != 0 && (
        <h2 className="text-center text-4xl font-bold pt-20 text-white">Upcoming Event{data?.length > 1 ? 's': ''}</h2>
      )}
      {data &&
        data.map((event: any, index: number) => (
          <div
            key={index}
            className="w-[55rem] min-h-[27rem] border-2 rounded-xl  border-yellow-500 mt-4"
          >
            <div className="w-full h-full flex gap-3 md:flex-row flex-col">
              <div className="h-full flex justify-center items-center p-4 md:w-[110rem] w-[20rem]">
                <Image
                  width={50}
                  height={50}
                  src={getImgLink(event[1])}
                  alt={event[2]}
                  className="object-cover rounded-lg aspect-square w-full h-[25rem]"
                />
              </div>
              <div className="text-white p-5 flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">{event[2]}</h1>
                <h1 className="text-[13px] font-semibold ">
                  {moment(event[4], "MM/DD/YYYY HH:mm:ss").format(
                    "Do MMMM YYYY"
                  )}{" "}
                  •
                  {moment(event[4], "DD/MM/YYYY HH:mm:ss").format(" h:mm a")}
                </h1>
                <h1 className="text-sm">{event[3]}</h1>
                <CountDown date={event[4]} />
                <div className="flex items-center justify-center mt-10">
                  <a href={event[5]} target="_blank" className="bg-gray-950 hover:bg-black border-2  border-yellow-700 p-2 px-4 text-sm rounded-xl">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UpcomingEvent;
