"use client";
import React from "react";
import Button from "../../Common/Button";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { useSelector } from "react-redux";

const PlanCard = ({ data }) => {
  const isLogedIn = useSelector((state) => state.auth.status);

  return (
      <div key={data.id}  className="space-y-6 border-2 h-[500px]  md:h-[550px] xl:h-[500px] lg:h-[570]   overflow-hidden bg-[#E2D0FA] border-[#9747FF] p-6 flex flex-col rounded-lg shadow-md">
        <Button className="bg-[#60B0F4] rounded-md w-[70%] sm:w-[60%] mx-auto cursor-default">
          {data.planName}
        </Button>
        <h1 className="font-bold text-lg text-center">Venus</h1>

        {/* Venues */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm sm:text-base">
              Handle{" "}
              <span className="text-[#6f39b6] font-bold text-[18px]">
                {data.Attendees}
              </span>{" "}
              Number of People
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm sm:text-base">Indoor</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm sm:text-base">Sound system</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm sm:text-base">Power backup</p>
          </div>
        </div>

        <h1 className="font-bold text-lg text-center">Menu</h1>

        {/* Menu */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm sm:text-base">{data.food}</p>
           </div> 
           <div className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm sm:text-base">
              Choose {data.Items} items from menu
            </p>

           </div>
        
        </div>

        <Link
          href={
            isLogedIn ? "/pages/dashboard/create_events" : "/pages/signUp"
          }
          className="flex items-center"
        >
          <Button className="bg-[#60B0F4] px-0  text-white   lg:w-[60%] mx-auto">
            Book Now
          </Button>
        </Link>
      </div>
  );
};

export default PlanCard;
