"use client";
import React from "react";
import PlanCard from "./PlanCard";
import {planData} from "../../../json/plan";

const Plan = () => {
  return (
    <>
      <div className=" max-w-full   flex flex-col sm:flex-row sm:flex-wrap px-16 sm:px-6 md:px-16   gap-10 justify-center  mt-60 mb-20">
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
