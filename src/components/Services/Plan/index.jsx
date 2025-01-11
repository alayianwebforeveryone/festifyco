"use client";
import React from "react";
import PlanCard from "./PlanCard";
import {planData} from "../../../json/plan";

const Plan = () => {
  return (
    <>
      <div className=" lg:gap-36 gap-4  space-y-4 md:space-y-0  items-center   flex flex-col md:flex-row  px-8  sm:px-6 md:px- justify-center  mt-24 mb-20">
         {
           planData.map((data)=>{

            return(
                
                    <PlanCard  data={data} />
                
            )
           })
         }
      </div>
    </>
  );
};

export default Plan;
