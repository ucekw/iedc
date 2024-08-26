"use client";
import { arch } from "os";
import React, { useState } from "react";
import Slider from "react-slick";

const Event = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const events = [
    {
      title: "I-Plan",
      date: "12/03/2024 - 04/03/2024",
      image: "/images/iplan.png",
    },
    {
      title: "Affiliate Marketing",
      date: "01/12/2023",
      image: "/images/affiliate-marketing.png",
    },
    {
      title: "Origami Workshop",
      date: "06/12/2024",
      image: "/images/origami-workshop.png",
    },
    // Add more events as needed
  ];

  const getMiddleSlideIndex = (index: number) => {
    const middleIndex = Math.floor(events.length / 2);
    if (index === events.length - 1) {
      return 0; // Return to the first slide at the end
    }
    return (index + middleIndex) % events.length;
  };

  return (
    <div className="py-8 bg-black text-white">
      <h2 className="text-center text-3xl mb-6">Our Events</h2>
      <div className="flex flex-col">
        <Slider {...settings} >
          {events.map((event, index) => (
            <div
              key={index}
              className={`event-card   ${
                index === getMiddleSlideIndex(currentSlide) ? "active" : ""
              }`}
            >
              <div className="bg-black p-6 w-[20rem] rounded-lg border border-yellow-500 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-60 w-full object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm mb-4">{event.date}</p>
                <a
                  href="#"
                  className=" transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Event;
