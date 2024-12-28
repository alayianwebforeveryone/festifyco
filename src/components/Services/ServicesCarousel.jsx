"use client";
// components/QuoteCarousel.js
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // For custom arrows
import homeBanner from "../../../Assets/Images/homeBanner.png";
import Image from "next/image";
import Button from "../Common/Button";
import { eventCardData } from "../../json/event.js";
const ServicesCarousel = () => {
  const [quotes, setQuotes] = useState([]);
  const sliderRef = useRef(null); // Ref to access the Slider component

  // Slick settings
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Custom Arrow Handlers
  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };

  return (
    <div className=" text-white w-[80%]   mx-auto pt-60">
      {/* Slick Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {eventCardData.map((data, index) => (
          <div key={index} className="relative p-6 ">
            <div
              className="text-center  h-[388px] w-full items-center text-white justify-center flex flex-col gap-6 border-2 border-[#9747FF]  rounded-xl"
              style={{
                backgroundImage: `url(${homeBanner})`, // Use backticks here
                // Optional: Center the background image
              }}
            >
              <p className="text-[30px] font-bold leading-[1.5rem] p-4 ">
                {data.name}
              </p>
              <p className="text-[16px] leading-[1.664375rem] font-semibold px-10 ">
                - {data.description}
              </p>
              <Button className="bg-[#60B0F4] text-white mx-2 mt-10   ">
                Explore Event
              </Button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="absolute bottmo-10  left-0 right-0 flex justify-center z-10">
        <button
          className="bg-[#9747FF] text-white p-2 rounded-full mx-2"
          onClick={handlePrev} // Use the custom prev arrow handler
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className="bg-[#9747FF] text-white p-2 rounded-full mx-2"
          onClick={handleNext} // Use the custom next arrow handler
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;
