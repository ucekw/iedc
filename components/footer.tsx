import Image from "next/image";
import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });

function Footer() {
  return (
    <div
      className={` ${font.className} absolute  w-full md:h-[20rem] h-[35rem] bg-black`}
    >
      <div className="flex  flex-col bg-[#F4B518] rounded-t-[50px]  h-full  p-10">
        <div className="flex md:flex-row flex-col">
          <div className=" flex md:justify-center items-center">
            <Image
              src={"/logo.svg"}
              width={28}
              height={28}
              alt="logo"
              blurDataURL="data:..."
              placeholder="blur"
              className={`prevent-select md:w-64 w-32 object-cover rounded-lg`}
            />
          </div>
          <div className="flex items-start w-full justify-evenly md:gap-0 gap-7 md:pt-16 md:flex-row flex-col">
            <div className="flex flex-col  justify-center">
              <h1 className="md:text-xl text-md font-semibold">Pages</h1>
              <a href="/team" className="text-sm">
                Team
              </a>
              <a href="/events" className="text-sm">
                Events
              </a>
              <a href="/about" className="text-sm">
                About Us
              </a>
            </div>
            <div className="flex flex-col  justify-center">
              <h1 className="md:text-xl text-md font-semibold">Address</h1>
              <p className="text-sm">
                University College of Engineering <br /> Golden Jubilee
                Building,
                <br />
                Karyavattam Thripadapuram Rd, Karyavattom,
                <br /> Thiruvananthapuram, Kerala 695581
              </p>
            </div>
            <div className="flex flex-col  justify-center items-center">
              <h1 className="md:text-xl text-md font-semibold">Follow us on</h1>
              <div className="flex gap-3 items-center">
                <a href="https://www.instagram.com/legacyiedc/">
                  <FaInstagram className="md:size-8 size-6 " />
                </a>
                <a href="https://www.linkedin.com/company/iedc-ucek/">
                  <FaLinkedin className="md:size-8 size-6 " />
                </a>
                <a href="">
                  <FaWhatsapp className="md:size-8 size-6 " />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-black text-center pt-4 md:text-sm text-[10px]">
            © {new Date().getFullYear()} Legacy IEDC UCEK. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
