"use client";
import React from "react";
import Button from "../../Common/Button";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { useSelector } from "react-redux";

const PlanCard = ({ data }) => {
  const isLogedIn = useSelector((state) => state.auth.status);
  return (
    <>
      <div key={data.id} className=" ">
        <div className="  space-y-6 border-2 bg-[#E2D0FA] border-[#9747FF] p-6 flex flex-col">
          <Button className="bg-[#60B0F4] rounded-md w-[60%] mx-auto cursor-default">
            {data.planName}
          </Button>
          <h1 className="font-bold text-lg text-center">Venus</h1>

          {/* Venues */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">
                Handle <span className="text-[#6f39b6] font-bold text-[18px] ">{data.Attendees}</span>  Number of People
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">Indoor</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">Sound system</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">Power backup</p>
            </div>
          </div>

          <h1 className="font-bold text-lg text-center">Menu</h1>

          {/* Menu */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm ">{data.food}</p>
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm ">Chose {data.Items} items from meue</p>
            </div>
          </div>

          <Link
            href={
              isLogedIn ? "/pages/dashboard/create_events" : "/pages/signUp"
            }
            className=" flex items-center"
          >
            <Button className="bg-[#60B0F4] text-white w-[40%] sm:w-[50%] mx-auto">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlanCard;