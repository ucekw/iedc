import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { Montserrat } from "next/font/google";
import EventCard from "@/components/eventCard";

const font = Montserrat({ subsets: ["latin"] });

function Page() {
  return (
    <div>
      <Navbar page="about" />
      <div
        className={` ${font.className} bg-black h-full flex flex-col items-center w-full pt-40`}
      >
        <h1 className="text-white text-center md:text-5xl text-3xl font-semibold ">
          About Us
        </h1>
        <span className="w-[30%] h-[1px] bg-[#FBBA1A] mt-10"></span>
        <div className="text-white w-[90%] md:px-32 px-2 pt-10 pb-10  justify-items-center gap-4">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Who we are
          </h2>
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Legacy - Innovation and Entrepreneurship Development Centre – UCEK
          </h2>
          <blockquote className="mt-6  pl-6 italic ">
            We are the change-makers of UCEK.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            IEDC-UCEK was set up by the Kerala Startup Mission in the University
            College of Engineering as part of establishing Innovation and
            Entrepreneurship Development Centres (IEDCs) all around Kerala in
            various colleges to promote the culture of startups and to instill
            the concept of entrepreneurship among students. We branded our IEDC
            as &apos;Legacy-IEDC-UCEK&apos; and it serves primarily as a catalyst for
            entrepreneurship at the institute
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Consider the following scenario. You are a fresher at our college.
            You do not know what to do, what to expect, what to offer, and a
            hundred other uncertainties. You stick to academics, confine
            yourself to classrooms, wander during breaks, and then settle for a
            9-5 office job upon graduating.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Now consider the scenario with an IEDC at the college. You are a
            fresher at our college. You get opportunities to attend workshops on
            the topics of your interest. You get to follow up on the skills,
            honing them to ultimately deliver your potential. You see a world
            outside your four classroom walls, you begin to dream, to aspire, to
            see yourself on top of the world. You see the change in you through
            the four years as your tread your self-made path. You become capable
            of adaptation, you learn to thrive in any environment, and you
            strive to build, empower and revolutionize the world around you.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This is what we offer. We help you create a choice instead of
            choosing, we encompass your dreams with wings to let them fly, and
            we enable you to break the boundaries, to make, to sustain, and to
            leave a mark.
          </p>
          <blockquote className="mt-6  pl-6 italic">
            Legacy IEDC UCEK is built enforcing the three ideals – <b>CREATE</b>
            , <b>SUSTAIN</b>, &<b>THRIVE</b>.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          Every member of Legacy IEDC UCEK believes in this ideology. We are a club of
          simple yet powerful human beings working passionately to make it happen.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
