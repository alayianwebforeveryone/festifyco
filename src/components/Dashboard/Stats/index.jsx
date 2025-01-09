

"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import EventBarGraph from "./EventBarGraph";
import { useSelector, useDispatch } from "react-redux";
import { fetchPurchasedServicesData } from "../../../app/redux/Slices/userEventSlice";

export function Stats() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPurchasedServicesData());
  }, [dispatch]);

  const purchasedEvents = useSelector((state) => state.events.purchasedServices);
  console.log("Purchased Events in Stats:", purchasedEvents);

  const purchasedEventsCount = purchasedEvents ? purchasedEvents.length : 0;

  return (
    <div className="px-8 py-12 ">
      <div className="flex w-full bg- flex-col  xl:flex-row  justify-between     gap-12  ">
        <div className="border xl:w-[70%] w-full px-4 py-8   border-[#9747FF] rounded-[22px]  ">
          <div>
            <h2 className="text-[#5592C6] font-bold text-3xl  ">Event Data</h2>
          </div>
          <div className="mt-12 ">
            <EventBarGraph  graphData = {purchasedEvents}/>
          </div>
        </div>
        <div className="xl:w-[30%]   border   border-[#9747FF] rounded-[22px] px-4 py-8    ">
          <h1 className="text-[#5592C6] font-bold text-3xl mb-12  ">
            Total Numbers
          </h1>
          <p className="text-[24px] font-bold ">
            Registered Events:{" "}
            <span className="text-[#9747FF] text-[32px] ml-4 font-bold">
              25
            </span>{" "}
          </p>
          <p className="text-[24px] font-bold">
            Your Purchased Events:
            <span className="text-[#60B0F4] text-[32px] ml-4 ">{purchasedEventsCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
