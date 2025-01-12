"use client";

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // For custom arrows
import qouteImgae from '../../../Assets/Images/quoteIcon.png'
import Image from 'next/image';

const QuoteCarousel = () => {
  const [quotes, setQuotes] = useState([]);
  const sliderRef = useRef(null); // Ref to access the Slider component

  useEffect(() => {
    // Fetch quotes from the API
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes)); // Fetch only the first 3 quotes
  }, []);

  // Slick settings
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    arrows: false, // Enable arrows
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
    <div className="relative w-full text-white   max-w-7xl mx-auto">
      {/* Slick Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} className="flex justify-center bg-[#EBE2F5] items-center p-6 lg:p-2">
            <div className="text-center mx-auto items-center text-black justify-center flex flex-col px-4 lg:px-4 bg-[#EBE2F5] py-10 w-[319px] sm:w-[250px] md:w-[280px] lg:w-[310px] h-[279px] gap-6 border-2 border-[#9747FF]  rounded-lg shadow-lg">
              <span className=''><Image src={qouteImgae} alt='/' width={48}  /></span>
              <p className="text-[0.875rem] sm:w-[220px] md:w-[250px] lg:w-[284px] w-[284px] font-normal leading-[1.5rem] ">{quote.quote}</p>
              <p className="text-[1.375rem] font-bold leading-[1.664375rem]  text-[#60B0F4]">- {quote.author}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="absolute bottom-[-70px]  left-0 right-0 flex justify-center z-10">
        <button
          className="bg-[#9747FF] text-white p-2 rounded-full mx-2"
          onClick={handlePrev} // Use the custom prev arrow handler
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className="bg-[#9747FF] text-white p-2 rounded-full mx-4"
          onClick={handleNext} // Use the custom next arrow handler
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default QuoteCarousel;
