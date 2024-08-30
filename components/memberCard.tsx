import { getImgLink } from "@/lib/data";
import { resolveMediaIcon } from "@/lib/helper";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

function MemberCard({ data }: { data: string[] }) {
  return (
    <div className="md:min-h-[26rem] md:w-[19rem] min-h-[14rem]  w-[10rem] bg-yellow-600 rounded-lg p-5">
      <div className="flex items-center justify-center flex-col md:gap-6 gap-2">
        <div className="md:h-56 md:w-56 h-28 w-28 rounded-full bg-black md:mt-4 overflow-hidden">
          <Image
            width={130}
            height={130}
            alt="image"
            referrerPolicy={"no-referrer"}
            src={`https://lh3.googleusercontent.com/d/${data[7]}`}
            className="mb-4 prevent-select w-full rounded-lg -mt-7"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white md:text-2xl text-[14px] text-center font-semibold ">
            {data[1]}
          </h3>
          <p className="text-white  md:text-[15px] text-[10px] text-center">
            {data[3]}
          </p>
          <div className="flex gap-3 text-white items-center w-full justify-center md:mt-5 mt-2">
            <a href={data[4]} target="_blank">
              {data[4] && resolveMediaIcon(data[4])}
            </a>
            {data[5] && (
              <a href={data[5]} target="_blank">
                {data[5] && resolveMediaIcon(data[5])}
              </a>
            )}
            {data[6] && (
              <a href={data[6]} target="_blank">
                {data[6] && resolveMediaIcon(data[6])}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
