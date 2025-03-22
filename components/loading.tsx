"use client";
import Image from "next/image";
import React from "react";
import logo from "../public/logo.jpeg";
import { useEffect, useState } from "react";

function Loading() {
  const [currentText, setCurrentText] = useState("CREATE.");
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const texts = ["CREATE.", "SUSTAIN.", "THRIVE."];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
      setAnimationKey((prevKey) => prevKey + 1); // Trigger re-animation
    }, 2000); // Matches the duration of the animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="prevent-select  h-screen bg-black w-full flex flex-col items-center justify-center">
      <Image
        className="w-40 h-40"
        alt="logo"
        src={logo}
        width={200}
        height={200}
      />
      <div className="overflow-hidden h-20 -mt-11">
        <h2
          key={animationKey}
          className="text-3xl text-white font-bold animate-slide-up"
        >
          {currentText}
        </h2>
      </div>
    </div>
  );
}

export default Loading;
