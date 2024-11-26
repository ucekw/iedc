"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import EventCard from "@/components/eventCard";
import { getPastEvents } from "@/lib/data";
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import UpcomingEvent from "@/components/upcomingEvent";


const font = Montserrat({ subsets: ["latin"] });

function Page() {
  interface Event {
    name: string;
    date: string;
    imageUrl: string;
    description: string;
  }

  interface YearEvents {
    [year: string]: Event[];
  }

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPastEvents().then((response) => {
      
      setData(response.Events);

      setLoading(false);
    });
  }, []);



  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center bg-black">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="loading"
            className="animate-pulse"
          />
        </div>
      ) : (
        <div>
          <Navbar page="events" />
          <UpcomingEvent/>
          <div
            className={` ${font.className} bg-black h-full flex flex-col items-center w-full pt-40`}
          >
            <h1 className="text-white text-center md:text-5xl text-3xl font-semibold ">
              Conducted Events
            </h1>
            <span className="w-[30%] h-[1px] bg-[#FBBA1A] mt-10"></span>
            <div className="w-[90%] flex  px-2 pt-10 pb-10  gap-4">
              {data &&
                data.map((event: YearEvents, index: number) => (
                  <div key={index} className="w-full  px-2 pt-10 pb-10 justify-items-center gap-4">
                    <h1 className="text-white md:text-2xl text-5xl font-semibold" >
                      {event.year.toString()}
                    </h1>
                    <div className="md:w-[95%] w-full px-2 pt-10 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
                      {event?.eventdata.map(
                        (eventData: Event, index: number) => (
                          <EventCard data={eventData} key={index} />
                        )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Page;
