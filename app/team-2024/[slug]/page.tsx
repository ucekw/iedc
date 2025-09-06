"use client";

import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// Removed unused import of Papa
import { getMemberData } from "@/lib/data";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

function Page() {
  const params = useParams();
  const searchParams = useSearchParams();

  const [data, setData] = useState<string[][] | undefined>(undefined);
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const id = searchParams.get("id");

  const slugId = slug + (id ? `-${id}` : "");

  useEffect(() => {
    getMemberData(slugId.toLowerCase()).then((data) => {
      setData([data[0]]);
    });
  }, []);

  return (
    <div
      className={` ${font.className} bg-black h-screen flex flex-col items-center w-full pt-40`}
    >
      <h1 className="text-[#FBBA1A] text-center md:text-5xl text-3xl font-semibold ">
        TEAM
      </h1>
      <div className="text-white flex flex-col items-center mt-10">
        <p className="text-2xl">{(data && data[1]) || ""}</p>
        <p className="text-lg">{(data && data[5]) || ""}</p>
      </div>

      <p className="bottom-4 absolute text-white text-[13px]">THIS PAGE IS UNDER CONSTRUCTION</p>
    </div>
  );
}

export default Page;
