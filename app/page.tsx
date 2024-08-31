"use client";
import Events from "@/components/events";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar"           ;
import OurSaga from "@/components/ourSaga";
import VisionAndMission from "@/components/visionAndMission";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection  />
          <VisionAndMission />
          <OurSaga />
          <Events />
          <Footer />
        </>
      )}
    </div>
  );
}
