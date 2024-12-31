"use client"
import React from "react";
// import backarrowicon from "../../../../../../../assets/icons/backarrow.svg";
// import jeep from "../../../../../../../assets/images/jeep.jpeg";
import Image from "next/image";
// import StarRatings from "react-star-ratings";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Common/Button";
const EventCardModal = ({  isVisible, close, eventCardData }) => {


  const handleClose = (e) => {
    if (e.target.id === "container") close();
  }


  if (!isVisible) return null;

  return (
    <>

      <div
        onClick={handleClose}
        id="container"
        className="fixed inset-0  bg-black/25 flex justify-center items-center ">
        <div className="bg-[#EBE2F5]  w-[80%] mt-14 lg:w-[50%] h-[90%]   pb-10  rounded-xl  overflow-y-scroll hideScrollbar ">


          {/* header */}
          <div className="flex leading-none items-center sticky top-0 bg-[#60B0F4]  left-0 box-border  justify-between w-full overflow-hidden z-50 border-b-2 py-3  ">
            <div className=" flex  justify-start mx-6 py-3 w-full items-baseline ">
              <FaArrowRight className=" text-white cursor-pointer" onClick={close} />
             
            </div>


          </div>
        
              <div className=" space-y-6">
                <Image src={eventCardData.image} alt='eventBg' height={100} width={100} className="px-2 py-1 w-full h-[300px] " />
                <div className=" flex flex-col py-3 px-10 space-y-4">
                  <h1 className="text-[1.875rem] font-semibold leading-[2.269rem] ">Title</h1>
                  <p className="text-[18px] font-semibold">{eventCardData.Event_Name}</p>
                  <h1 className="text-[1.875rem] font-semibold leading-[2.269rem] ">Description</h1>
                  <p className="text-[18px] font-semibold">{eventCardData.description}</p>
                  <h1 className="text-[1.875rem] font-semibold leading-[2.269rem] ">Date & Time</h1>
                  <p className="text-[18px] font-semibold">{eventCardData.DateTime}</p>
                  <h1 className="text-[1.875rem] font-semibold leading-[2.269rem] ">Duration</h1>
                  <p className="text-[18px] font-semibold">2-4 hours</p>
                  <h1 className="text-[1.875rem] font-semibold leading-[2.269rem] ">Medium</h1>
                  <p className="text-[18px] font-semibold">Online</p>
                  <h1 className="text-[1.875rem] font-semibold leading-[2.269rem] ">Registration</h1>
                  <p className="text-[18px] font-semibold">Free</p>

                </div>
              </div>
              
              <div className=" flex items-center justify-center">
              <Button className=" bg-[#60B0F4] text-white ">Register Now</Button>
              </div>
              
          

        </div>
      </div>

    </>
  );
};
export default EventCardModal;