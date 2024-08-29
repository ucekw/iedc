"use client";
import Events from "@/components/events";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar"           ;
import OurSaga from "@/components/ourSaga";
import VisionAndMission from "@/components/visionAndMission";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleImagesLoaded = () => {
    setLoading(false); // Hide the loading screen when images are loaded
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection onImagesLoaded={handleImagesLoaded} />
          <VisionAndMission />
          <OurSaga />
          <Events />
          <Footer />
        </>
      )}
    </div>
  );
}
