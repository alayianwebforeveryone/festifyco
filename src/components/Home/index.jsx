import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import homeBanner from "../../../Assets/Images/homeBanner.png";

export const Home = () => {
  return (
    <>
      <div className="pt-8 sm:pt-16 px-4  sm:px-12  ">
        <div className="pt-24 flex flex-col-reverse sm:items:center   sm:flex-row justify-between sm:gap-12   ">
          <div data="banner" className=" sm:w-[43%] ">
            <div>
              <h1 className="text-[40px] font-extrabold">
                Creating Moments, Crafting Memories
              </h1>
            </div>
            <p className="text-[20]   md:leading-[40px]">
              At Testify Co., we turn your vision into reality with seamless
              event planning and unforgettable experiences. From corporate
              gatherings to dreamy weddings, our expert team ensures every
              detail is perfect.At Testify Co., we turn your vision into reality
              with seamless event planning and unforgettable experiences. From
              corporate gatherings to dreamy weddings, our expert team ensures
              every detail is perfect.
            </p>
            <Button type="Submit" className="px-4 bg-[#9747FF] text-white  rounded-full  mt-4"   >
              Get Started 
            </Button>
           
          </div>
          <div className="sm:w-[40%] w-full  ">
            <Image className="w-full  " src={homeBanner} alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};
