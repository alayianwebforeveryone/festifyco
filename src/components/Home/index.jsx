import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import homeBanner from "../../../Assets/Images/homeBanner.png";
import CatogoriesCard from "./CatogoriesCard";
import QuoteCarousel from "./QuoteCarousel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactForm from "../Contact/ContactForm";


export const Home = () => {
  return (
    <>
      <div className="pt-8 sm:pt-16 px-4  sm:px-12  ">
        {/* ====================Banner Section =========== */}
        <div className="pt-24 flex flex-col-reverse sm:items:center   sm:flex-row justify-between sm:gap-12   ">
          <div data="banner" className=" sm:w-[60%] lg:w-[40%] md:w-[55%]  ">
            <div>
              <h1 className=" text-[35px] lg:text-[35px] text-center sm:text-left sm:text-[20px] md:text-[25px] font-extrabold text-[#9747FF]">
                Creating Moments, Crafting Memories
              </h1>
            </div>
            <p className="text-[20] sm:text-[15] md:text-[15] lg:text-[20] leading-[40px] sm:leading-[20px] md:leading-[25px] lg:leading-[35px]">
              At Testify Co., we turn your vision into reality with seamless
              event planning and unforgettable experiences. From corporate
              gatherings to dreamy weddings, our expert team ensures every
              detail is perfect.At Testify Co., we turn your vision into reality
              with seamless event planning and unforgettable experiences. From
              corporate gatherings to dreamy weddings, our expert team ensures
              every detail is perfect.
            </p>
            <Button type="Submit" className="px-4 bg-[#9747FF] text-white flex items-center justify-center sm:items-start  rounded-full  mt-4"   >
              Get Started 
            </Button>
           
          </div>
          <div className="sm:w-[40%] lg:w-[50%] md:w-[50%] w-full  ">
            <Image className="w-full  " src={homeBanner} alt="banner" />
          </div>
        </div>
        {/* ==============card section ======================= */}
        <CatogoriesCard className="mt-36" />
          {/*================== QuoteCarouse=========== */}
          <div className="container mx-auto max-w-7xl  py-12 ">
      <h1 className="text-[2.25rem] text-[#9747FF] font-bold text-center mb-8">We Provide Value to Our Client</h1>
      <QuoteCarousel />
    </div>
    <ContactForm  />
      </div>
    </>
  );
};
