"use client";
import MemberCard from "@/components/memberCard";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/footer";
import { getTeamData } from "@/lib/data";
import logo from "../../public/logo.jpeg";

const font = Montserrat({ subsets: ["latin"] });
function Page() {
    const [teamData, setTeamData] = React.useState<string[][]>([]);
    const [loading, setLoading] = useState(true);
  const execom = [
    {
      title: "Nodal Officers",
      role: "nodal",
    },
    {
      title: "Project Coordinator",
      role: "project",
    },
    {
      title: "Mentors",
      role: "mentor",
    },
    {
      title: "Executive",
      role: "executive",
    },
    {
      title: "Quality & Operations",
      role: "operations",
    },
    {
      title: "Finance",
      role: "finance",
    },
    {
      title: "Creative & Innovation",
      role: "creative",
    },
    {
      title: "Technology",
      role: "technology",
    },
    {
      title: "Branding & Marketing",
      role: "marketing",
    },
    {
      title: "Community",
      role: "community",
    },
    {
      title: "Women Innovation",
      role: "women",
    },
    {
      title: "IPR & Research",
      role: "research",
    },
    {
      title: "Executive Curators",
      role: "curator",
    },
  ];

  useEffect(() => {
    getTeamData().then((data) => {
      setTeamData(data);
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
          <Navbar page="team" />
          <div
            className={` ${font.className} bg-black h-full flex flex-col items-center w-full pt-40`}
          >
            <h1 className="text-white text-center md:text-5xl text-3xl font-semibold">
              Executive Committee
            </h1>
            <span className="w-[30%] h-[1px] bg-[#FBBA1A] mt-10"></span>

            <div className="mb-20">
              {execom.map((item, index) => {
                const filteredMembers = teamData.filter(
                  (member) => member[2] === item.role
                );
                const gridColsClass =
                  filteredMembers.length === 1
                    ? "grid-cols-1"
                    : filteredMembers.length === 2
                    ? "grid-cols-2"
                    : "md:grid-cols-3 grid-cols-2 md:gap-52";

                return (
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
                    <div
                      className={`grid ${gridColsClass} md:w-[80%] w-full  gap-4 px-5 justify-items-center`}
                    >
                      {filteredMembers.map((member, index) => (
                        <MemberCard data={member} key={index} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Page;
