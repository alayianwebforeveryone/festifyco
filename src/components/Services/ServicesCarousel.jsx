"use client";
import React, {  useRef } from 'react';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // For custom arrows

import Button from '../Common/Button';
import { services } from '../../json/event.js'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ServicesCarousel = () => {
  const sliderRef = useRef(null); // Ref to access the Slider component
  const isLogedIn = useSelector((state) => state.auth.status);

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
    <div className="text-black w-[80%] mx-auto pt-12">
      {/* Slick Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {services.map((data, index) => (
          <div key={index} className="relative p-4 flex mx-auto md:p-6">
            <div
              className="text-center w-full h-[300px] sm:h-[350px] md:h-[388px] flex flex-col items-center justify-between gap-4 p-4 sm:gap-4 sm:p-6 border-2 border-[#9747FF] rounded-xl"
              style={{
                backgroundImage: `url('/images/eventmodalbg.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
         
              <div className=' mt-12 space-y-5'>
                <p className="text-lg text-[#ebf0f5] md:text-3xl font-extrabold">{data.serviceName}</p>
                <p className="text-lg text-white md:text-base font-semibold px-4 sm:px-6">
                   {data.description}
                </p>
              </div>
                
                 <Link  href={isLogedIn ?'/pages/dashboard/view_events':'/pages/signUp' } className=' flex items-center justify-center'>
                 <Button className="bg-[#9747FF] absolute bottom-20 text-white px-4 py-2 mt-4 rounded-lg">
                   Get Services
                 </Button>
                 </Link>
              
            </div>

          </div>

        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="absolute  left-0 right-0 flex justify-center z-10">
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
