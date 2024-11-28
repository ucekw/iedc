import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

function Page() {
  return (
    <>
      <Navbar page="joinus" />
      <div className="pt-24 flex items-center flex-col bg-black h-screen text-white">
        <h1 className="md:text-3xl text-lg uppercase font-semibold ">
          Join Us
        </h1>
        <div className="h-full flex items-center justify-center flex-col">
          <p>Join us to be a part of the change</p>
          <div>Coming Soon...</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
