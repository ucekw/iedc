"use client";
import MemberCard from "@/components/memberCard";
import Navbar from "@/components/navbar";
import React, { useEffect } from "react";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/footer";
import { getTeamData } from "@/lib/data";

const font = Montserrat({ subsets: ["latin"] });
function Page() {
  const [teamData, setTeamData] = React.useState<string[][]>([]);

  const execom = [
    {
      title: "Nodal Officers",
      role: 'nodal'
    },
    {
      title: "Project Coordinator",
      role: 'project'
    },
    {
      title: "Mentors",
      role: 'mentors'
    },
    {
      title: "Executive",
      role: 'executive'
    },
    {
      title: "Quality & Operations",
      role: 'operations'
    },
    {
      title: "Finance",
      role: 'finance'
    },
    {
      title: "Creative & Innovation",
      role: 'creative'
    },
    {
      title: "Technology",
      role: 'technology'
    },
    {
      title: "Branding & Marketing",
      role: 'marketing'
    },
    {
      title: "Community",
      role: 'community'
    },
    {
      title: "Women Innovation",
      role: 'women'
    },
    {
      title: "IPR & Research",
      role: 'research'
    },
    {
      title: "Executive Curators",
      role: 'curators'
    },
  ];

  useEffect(() => {
    getTeamData().then((data) => {
      setTeamData(data);
    });
  }, []);

  return (
    <div>
      <Navbar page="team" />
      <div
        className={` ${font.className} bg-black h-full flex flex-col items-center w-full pt-40`}
      >
        <h1 className="text-white text-center md:text-5xl text-3xl font-semibold">
          Executive Committee
        </h1>
        <span className="w-[30%] h-[1px] bg-[#FBBA1A] mt-10"></span>

        <div className="mb-20">
          {execom.map((item, index) => (
            <div
              key={index}
              className="mt-20 flex flex-col gap-16 items-center"
            >
              <div className="flex flex-col">
                <h1 className="text-white text-center md:text-3xl text-xl font-semibold ">
                  {item.title}
                </h1>
                <span className="w-[100%] h-[1px] bg-[#FBBA1A]  "></span>
              </div>
              <div className="grid grid-cols-2 md:w-[80%] w-full md:gap-52 gap-4 px-5 justify-items-center">
                {teamData.map((member, index) => (
                  <>
                    {member[2] !== item.role ? null : <MemberCard data={member} key={index}/>}
                  </>
                ))}
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
