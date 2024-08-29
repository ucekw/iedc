import Image from "next/image";
import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });

function Footer() {
  return (
    <div className={` ${font.className} absolute  w-full h-[20rem] bg-black`}>
      <div className="flex bg-[#F4B518] rounded-t-[50px]  h-full  p-10">
        <div className=" flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            width={28}
            height={28}
            alt="logo"
            blurDataURL="data:..."
            placeholder="blur"
            className={`prevent-select w-64 object-cover rounded-lg`}
          />
        </div>
        <div className="flex items-start w-full justify-evenly pt-16">
          <div className="flex flex-col  justify-center">
            <h1 className="text-xl font-semibold">Pages</h1>
            <a href="/team">Team</a>
            <a href="/events">Events</a>
            <a href="/about">About Us</a>
          </div>
          <div className="flex flex-col  justify-center">
            <h1 className="text-xl font-semibold">Address</h1>
            <p>
              University College of Engineering <br /> Golden Jubilee Building,
              <br />
              Karyavattam Thripadapuram Rd, Karyavattom,
              <br /> Thiruvananthapuram, Kerala 695581
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center">
            <h1 className="text-xl font-semibold">Follow us on</h1>
            <div className="flex gap-3 items-center">
              <a href="https://www.instagram.com/legacyiedc/" >
              <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/company/iedc-ucek/">
                <FaLinkedin size={30}/>
              </a>
              <a href="">
                <FaWhatsapp size={30}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
