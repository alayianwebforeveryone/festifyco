"use client";
import React, { useEffect } from "react";
import Button from "../Common/Button";
import Image from "next/image";
import homeBanner from "../../../Assets/Images/homeBanner.png";
import CatogoriesCard from "./CatogoriesCard";
import QuoteCarousel from "./QuoteCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import authService from "../../app/pages/appwrite/auth";
import { login, logout } from "../../app/redux/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Contact from "../Contact";
export const Home = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector((state) => state.auth.status);

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        console.log("get current user data  from home", userData);
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <div className="pt-6 sm:pt-16 px-4  sm:px-12  ">
        {/* ====================Banner Section =========== */}
        <div className="pt-24  flex flex-col-reverse sm:items-center justify-between gap-4 lg:gap-0  sm:flex-row   ">
          <div
            data="banner"
            className=" sm:w-[60%] lg:w-[50%] md:w-[60%] sm:pl-4 "
          >
            <div>
              <h1 className=" text-[25px] mb-8 sm:mb-2   text-center sm:text-left sm:text-[25px] md:text-[28px] font-extrabold text-[#9747FF]">
                Creating Moments, Crafting Memories
              </h1>
            </div>
            <p className="text-[15px] text-justify sm:text-left sm:text-[17px] lg:text-[22px] leading-[26px] sm:leading-[26px] md:leading-[30px] lg:leading-[36px]">
              At Testify Co., we turn your vision into reality with seamless
              event planning and unforgettable experiences. From corporate
              gatherings to dreamy weddings, our expert team ensures every
              detail is perfect.At Testify Co., we turn your vision into reality
              with seamless event planning and unforgettable experiences. From
              corporate gatherings to dreamy weddings, our expert team ensures
              every detail is perfect.
            </p>
            {isLogedIn ? (
              <div className="flex items-center justify-center sm:justify-start">
                <Link href="/pages/services">
                  <Button
                    type="Submit"
                    className="px-4 bg-[#9747FF] text-white   rounded-full  mt-4"
                  >
                    Try Our Service
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-center sm:justify-start">
                <Link href="/pages/signup">
                  <Button
                    type="Submit"
                    className="px-12 text-xl font-bold  py-4 bg-[#9747FF] text-white  rounded-full  mt-4"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center sm:w-[50%] lg:w-[40%] md:w-[50%] w-full    ">
            <Image
              layout="intrinsic"
              className=" "
              src={homeBanner}
              alt="banner"
            />
          </div>
        </div>
        {/* ==============card section ======================= */}
        <CatogoriesCard />
        {/*================== QuoteCarouse=========== */}
        <div className="container mx-auto max-w-7xl  py-12 mt-48  ">
          <h1 className="text-[2.25rem] text-[#9747FF] font-bold text-center mb-8">
            We Provide Value to Our Client
          </h1>
          <QuoteCarousel />
        </div>
        <Contact />
      </div>
    </>
  );
};
