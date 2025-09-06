"use client";

import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getMemberData } from "@/lib/data";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { resolveMediaIcon, getPlatformName } from "@/lib/helper";
import Loading from "./loading";

const font = Montserrat({ subsets: ["latin"] });

export default function TeamMemberClient() {
  const params = useParams();
  const searchParams = useSearchParams();

  const [data, setData] = useState<string[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const id = searchParams.get("id");

  const slugId = slug + (id ? `-${id}` : "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getMemberData(slugId.toLowerCase());
        setData(result[0]);
      } catch (err) {
        setError("Failed to load member data");
        console.error("Error fetching member data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slugId]);

  let imageId = "";
  if (data && data[9]) {
    const match = data[9].match(/\/d\/([\w-]+)/);
    if (match && match[1]) {
      imageId = match[1];
    }
  }


  if (loading) {
    return (
     <Loading />
    );
  }

  if (error) {
    return (
      <div
        className={`${font.className} bg-black h-screen flex items-center justify-center`}
      >
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div
      className={` ${font.className} bg-black h-[50rem] md:h-screen flex flex-col overflow-hidden w-full pt-10 md:pt-40`}
    >
      <div className="text-white hidden md:flex flex-col items-center mt-10 ">
        <p className="md:text-6xl text-[#FBBA1A]">{(data && data[1]) || ""}</p>
        <p className="text-lg">{(data && data[5]) || ""}</p>
        <div className="flex flex-col gap-3 mt-6 w-full max-w-xs">
          {data && data[6] && (
            <a
              href={data[6]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-6 py-4 border border-white/20 hover:border-white/40"
            >
              <div className="text-[#FBBA1A]">{resolveMediaIcon(data[6])}</div>
              <span className="text-white font-medium">
                {getPlatformName(data[6])}
              </span>
            </a>
          )}
          {data && data[7] && (
            <a
              href={data[7]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-6 py-4 border border-white/20 hover:border-white/40"
            >
              <div className="text-[#FBBA1A]">{resolveMediaIcon(data[7])}</div>
              <span className="text-white font-medium">
                {getPlatformName(data[7])}
              </span>
            </a>
          )}
          {data && data[8] && (
            <a
              href={data[8]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-6 py-4 border border-white/20 hover:border-white/40"
            >
              <div className="text-[#FBBA1A]">{resolveMediaIcon(data[8])}</div>
              <span className="text-white font-medium">
                {getPlatformName(data[8])}
              </span>
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:hidden">
        <p className="md:text-6xl text-4xl text-[#FBBA1A]">
          {(data && data[1]) || ""}
        </p>
        <p className="text-lg text-white">{(data && data[5]) || ""}</p>
        <div className="flex flex-col gap-3 mt-6 w-full max-w-xs px-4">
          {data && data[6] && (
            <a
              href={data[6]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4  bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-6 py-4 border border-white/20 hover:border-white/40"
            >
              <div className="text-[#FBBA1A]">{resolveMediaIcon(data[6])}</div>
              <span className="text-white font-medium">
                {getPlatformName(data[6])}
              </span>
            </a>
          )}
          {data && data[7] && (
            <a
              href={data[7]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-6 py-4 border border-white/20 hover:border-white/40"
            >
              <div className="text-[#FBBA1A]">{resolveMediaIcon(data[7])}</div>
              <span className="text-white font-medium">
                {getPlatformName(data[7])}
              </span>
            </a>
          )}
          {data && data[8] && (
            <a
              href={data[8]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-6 py-4 border border-white/20 hover:border-white/40"
            >
              <div className="text-[#FBBA1A]">{resolveMediaIcon(data[8])}</div>
              <span className="text-white font-medium">
                {getPlatformName(data[8])}
              </span>
            </a>
          )}
        </div>
      </div>

      {data && imageId && (
        <Image
          width={700}
          height={700}
          alt="Team member image"
          referrerPolicy={"no-referrer"}
          src={`https://lh3.googleusercontent.com/d/${imageId}`}
          className="mb-4 prevent-select rounded-full md:w-[43rem] w-[65rem] absolute  -bottom-20 md:-mt-80"
        />
      )}
    </div>
  );
}
