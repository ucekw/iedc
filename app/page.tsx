import Events from "@/components/events";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar"           ;
import OurSaga from "@/components/ourSaga";
import VisionAndMission from "@/components/visionAndMission";
import Image from "next/image";

export default function Home() {
  return (
   <div >
    <HeroSection />
    <VisionAndMission/>
    <OurSaga/>
    <Events/>
    <Footer/>
   </div>
  );
}
