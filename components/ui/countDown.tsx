"use client";

import { useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import { countdownHelper} from "@/lib/utils";
const inter = Outfit({ subsets: ["latin"] });

export default function CountDown({
  date,
}: {
  date: Date;
}) {

  interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }


  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // const targetDate: Date = parseDate(date._i);

    
   useEffect(() => {
    // Ensure targetDate is a valid Date object
    const targetDate: Date = typeof date === 'string' ? new Date(date) : date;

    function updateCountdown() {
      if (targetDate instanceof Date && !isNaN(targetDate.getTime())) {
        const differenceMs: number =
          targetDate.getTime() - new Date().getTime();
        setCountdown(countdownHelper(differenceMs));
      } else {
        console.error('Invalid date:', targetDate);
      }
    }

    const intervalId = setInterval(updateCountdown, 1000); // Update countdown every second
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, [date]);


  return (
    <div className={`${inter.className}`}>
      <div
        className={`grid grid-flow-col mt-4 md:gap-5 gap-[3px] text-center auto-cols-max `}
      >
        {countdown.days ? (<div
          className={`flex flex-col  items-center justify-center  bg-[#131313] md:w-16 w-8 md:h-16 h-8 rounded-lg text-white text-[10px]`}
        >
          <span className="countdown font-mono md:text-xl text-[13px]">
            <span
              className={`${inter.className}`}
              style={
                {
                  "--value": countdown ? countdown.days : 0,
                } as React.CSSProperties
              }
            ></span>
           
          </span>
          <p className="md:text-[12px] text-[9px]">DAYS</p>
          
        </div>):null}
        <div className="flex flex-col items-center justify-center  bg-[#131313] md:w-16 w-8 md:h-16 h-8 rounded-lg text-white text-[10px]">

          <span className="countdown font-mono  md:text-xl text-[13px]">
            <span
              className={`${inter.className}`}
              style={
                {
                  "--value": countdown ? countdown.hours : 0,
                } as React.CSSProperties
              }
            ></span>
           
          </span>
     
          <p className="md:text-[12px] text-[9px]">
            
            HRS
            </p>
        </div>
        <div className="flex flex-col items-center justify-center  bg-[#131313] md:w-16 w-8 md:h-16 h-8 rounded-lg text-white text-[10px]">

          <span className="countdown font-mono  md:text-xl text-[13px]">
            <span
              className={`${inter.className}`}
              style={
                {
                  "--value": countdown ? countdown.minutes : 0,
                } as React.CSSProperties
              }
            ></span>

          </span>
          <p className="md:text-[12px] text-[9px]">

          MIN
          </p>
        </div>
        <div className="flex flex-col items-center justify-center  bg-[#131313] md:w-16 w-8 md:h-16 h-8 rounded-lg text-white text-[10px]">
        <span className="countdown font-mono  md:text-xl text-[13px]">
            <span
              className={`${inter.className}`}
              style={
                {
                  "--value": countdown ? countdown.seconds : 0,
                } as React.CSSProperties
              }
            ></span>
          </span>
          <p className="md:text-[12px] text-[9px]">

          SEC
          </p>
        </div>
      </div>
    </div>
  );
}
