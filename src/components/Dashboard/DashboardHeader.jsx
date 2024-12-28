"use client"
import Image from "next/image";
import * as React from "react";
import close from "../../../Assets/icons/Cancel.svg"
import Link from "next/link";
import Button from "../Common/Button";



export function DashboardHeader() {
  return (
    <div className="2xl:ml-40 ml-4 xl:ml-16  fixed top-2    ">
        
            <Link href= "/" className="flex justify-end px-8 mb-8 ">
                <Button
                 className="bg-[#9747FF] rounded-lg text-white font-bold ">
                    Go to home
                </Button>
            </Link>

        
        <div className="flex flex-col gap-4 py-6 bg-[#C7B1E2] rounded-[22px] px-6 mr-8  ">
             <h1 className="text-[32px] font-bold text-[#005298]">Manage Your Events</h1> 
             <p className="text-[24px]  ">At Testify Co., we turn your vision into reality with seamless event planning and unforgettable experiences. From corporate gatherings to dreamy weddings, our expert team ensures every detail is perfect.</p>
        </div>
    </div>
       
  );
}
