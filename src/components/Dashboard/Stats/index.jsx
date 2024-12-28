"use client";
import * as React from "react";
import Link from "next/link";
import EventBarGraph from "./EventBarGraph";

export function Stats() {
  return (
    <div className="flex w-full bg-black flex-col gap-4 xl:flex-row  justify-between ">
      <div className="border w-[50%]  border-[#9747FF] rounded-[22px]  ">
        <div>
          <h2>Event Data</h2>
        </div>
        <div>
          <EventBarGraph />
        </div>
      </div>
      <div>
        <h1>Total Numbers</h1>
      </div>
    </div>
  );
}
