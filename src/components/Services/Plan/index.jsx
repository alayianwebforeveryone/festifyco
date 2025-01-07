"use client";
import React from "react";
import PlanCard from "./PlanCard";
import {planData} from "../../../json/plan";

const Plan = () => {
  return (
    <>
      <div className=" w-full   flex   gap-10 justify-center  mt-60 mb-20">
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
