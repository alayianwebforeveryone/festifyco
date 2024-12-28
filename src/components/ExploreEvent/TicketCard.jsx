"use client"
import React from "react";

import { FaArrowRight } from "react-icons/fa";
import Button from "../Common/Button";
const TicketCard = ({ isVisible, close, eventCardData }) => {


  const handleClose = (e) => {
    if (e.target.id === "container") close();
  }

  if (!isVisible) return null;

  return (
    <>

      <div
        onClick={handleClose}
        id="container"
        className="fixed inset-0   bg-black/25 flex justify-center items-center ">
        <div className="bg-[#E2D0FA] pb-8  w-[90%] lg:w-[20%]   rounded-xl  hideScrollbar ">


          {/* header */}
          <div className="flex leading-none items-center sticky top-0 bg-[#60B0F4]  left-0 box-border  justify-between w-full overflow-hidden z-50 border-b-2 py-3  ">
            <div className=" flex  justify-start mx-6 w-full items-baseline ">
              <FaArrowRight className=" text-white" />
             
            </div>


          </div>
        
              
                
                <div className=" flex flex-col py-6 px-10 space-y-6">
                  <h1 className="text-[1.875rem] font-extrabold leading-[2.269rem] ">Name</h1>
                  <p>{eventCardData.name}</p>
                  <h1 className="text-[1.875rem] font-extrabold leading-[2.269rem] ">Event Name</h1>
                  <p>{eventCardData.name}</p>
                  <h1 className="text-[1.875rem] font-extrabold leading-[2.269rem] ">Pass Id</h1>
                  <p>{eventCardData.name}</p>
                  

                </div>
             
              <div className=" flex items-center justify-center">
              <Button className=" bg-white text-slate-950 border-2 border-[#60B0F4] ">Download</Button>
              </div>
              
          

        </div>
      </div>

    </>
  );
};
export default TicketCard;