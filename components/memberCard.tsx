import React from "react";
import { FaInstagram } from "react-icons/fa6";

function MemberCard() {
  return (
    <div className="h-[26rem] w-[19rem] bg-slate-800 rounded-lg p-5">
      <div className="flex items-center justify-center flex-col gap-6">
        <div className="h-56 w-56 rounded-full bg-black mt-4"></div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-2xl font-semibold ">Akash JJ</h3>
          <p className="text-white">Cheif Exexutive officer</p>
          <div className="flex gap-3 text-white items-center justify-center mt-5">
            <a href="">
              <FaInstagram size={20} />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
