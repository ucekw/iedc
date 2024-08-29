import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
function NotFound() {
  return (
    <div className="flex items-center bg-black justify-center h-screen w-full">
      <div className="bg-[#F4B518] w-96 h-64 rounded-lg flex items-center justify-center flex-col ">
        <Image
          className="w-24 h-24"
          alt="logo"
          src={logo}
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-semibold ">404</h1>
        <p>Page not found</p>
        <a href="/" className="underline">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
