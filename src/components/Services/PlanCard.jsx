"use client";
import React from 'react'
import Button from '../Common/Button'
import { planData } from '../../json/event.js'
import { TiTick } from "react-icons/ti";
import Link from 'next/link';
import { useSelector } from 'react-redux';


const PlanCard = () => {
  const isLogedIn = useSelector((state) => state.auth.status);
  return (
    <>
      <div className=' mt-60 mb-20'>
      <div className="w-[90%] mx-auto flex flex-wrap gap-10 justify-center py-8">
  {planData.map((data, index) => (
    <div
      key={index}
      className="w-[70%] sm:w-[45%] lg:w-[25%] space-y-6 border-2 bg-[#E2D0FA] border-[#9747FF] p-6 flex flex-col"
    >
      <Button className="bg-[#60B0F4] rounded-md w-[60%] mx-auto cursor-default">
        {data.planName}
      </Button>
      <h1 className="font-bold text-lg text-center">Venus</h1>

      {/* Venues */}
      <div className="space-y-2">
        {data.venues.map((venue, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm">{venue}</p>
          </div>
        ))}
      </div>

      <h1 className="font-bold text-lg text-center">Menu</h1>

      {/* Menu */}
      <div className="space-y-2">
        {data.menu.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-[#9747FF]">
              <TiTick className="text-white" />
            </span>
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>

   <Link href={isLogedIn ?'/pages/dashboard/create_events':'/pages/signUp' } className=' flex items-center' >
      <Button className="bg-[#60B0F4] text-white w-[40%] sm:w-[50%] mx-auto">
        Book Now
      </Button>
      </Link>
    </div>
  ))}
</div>

      </div>

    </>
  )
}

export default PlanCard