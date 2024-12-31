"use client";
import * as React from "react";
import Link from "next/link";
import Button from "../Common/Button";

export function DashboardHeader() {
  return (
    <div className=" fixed top-0   z-20  bg-[#EBE2F5]   ">
      <div className="flex justify-between  px-8 mb-8 py-4  ">
        <div className="flex justify- items:center gap-24    ">
          <span className="text-[#9747FF] font-bold   text-xl">
            Alayian Saeed
          </span>
          <span className="text-[#9747FF]  font-bold text-xl">
            exmple@gmail.com
          </span>
        </div>
        <Link href="/">
          <Button className="bg-[#9747FF] rounded-lg text-white font-bold ">
            Go to home
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 py-6 bg-[#C7B1E2] rounded-[22px] px-6 mr-8  ">
        <h1 className="text-[32px] font-bold text-[#005298]">
          Manage Your Events
        </h1>
        <p className="text-[24px]  ">
          At Testify Co., we turn your vision into reality with seamless event
          planning and unforgettable experiences. From corporate gatherings to
          dreamy weddings, our expert team ensures every detail is perfect.
        </p>
      </div>
    </div>
  );
}
