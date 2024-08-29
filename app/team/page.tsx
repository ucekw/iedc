import MemberCard from "@/components/memberCard";
import Navbar from "@/components/navbar";
import React from "react";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/footer";

const font = Montserrat({ subsets: ["latin"] });
function Page() {
  const execom = [
    "Nodal Officers",
    "Project Coordinator",
    "Mentors",
    "Executive",
    "Quality & Operations",
    "Finance",
    "Creative & Innovation",
    "Technology",
    "Branding & Marketing",
    "Community",
    "Women Innovation",
    "IPR & Research",
    "Executive Curators",
  ];
  return (
    <div>
      <Navbar page="team" />
      <div
        className={` ${font.className} bg-black h-full flex flex-col items-center w-full pt-40`}
      >
        <h1 className="text-white text-center text-5xl font-semibold ">
          Executive Committee
        </h1>
        <span className="w-[30%] h-[1px] bg-[#FBBA1A] mt-10"></span>

        <div className="mb-20">
          {execom.map((item) => (
            <div className="mt-20 flex flex-col gap-16 items-center">
              <h1 className="text-white text-center text-3xl font-semibold ">
                {item}
              </h1>
              <div className="grid grid-cols-2 w-[80%] gap-52 justify-items-center">
                <MemberCard />
                <MemberCard />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
