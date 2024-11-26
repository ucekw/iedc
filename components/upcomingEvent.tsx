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
    <div className={`flex flex-col gap-3 ${font.className}`}>
      {data ? <h2 className="text-center text-4xl font-bold pt-20">Upcoming Event</h2> : ''}
      {data &&
        data.map((event: any, index: number) => (
          <div
            key={index}
            className="w-[55rem] min-h-[27rem] border-2 rounded-xl  border-yellow-500 mt-4"
          >
            <div className="w-full h-full flex gap-3 md:flex-row flex-col">
              <div className="w-[50%] h-full flex justify-center items-center p-4">
                <Image
                  width={200}
                  height={200}
                  src={getImgLink(event[1])}
                  alt={event[2]}
                  className=" object-cover rounded-lg h-full w-full"
                />
              </div>
              <div className="w-[70%] text-white p-5 flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">{event[2]}</h1>
                <h1 className="text-[13px] font-semibold">
                  {moment(event[4], "DD/MM/YYYY HH:mm:ss").format("h:mm a")}
                </h1>
                <h1 className="text-sm">{event[3]}</h1>
                <CountDown
                  event={event}
                  date={moment(event[4], "DD/MM/YYYY HH:mm:ss")}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UpcomingEvent;
