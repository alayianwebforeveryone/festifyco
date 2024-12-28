"use client"
import React from "react";
// import backarrowicon from "../../../../../../../assets/icons/backarrow.svg";
// import jeep from "../../../../../../../assets/images/jeep.jpeg";
import Image from "next/image";
// import StarRatings from "react-star-ratings";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Common/Button";
import eventBg from '../../../Assets/Images/eventmodalbg.jpeg';
const EventCardModal = ({ isVisible, close, eventCardData }) => {


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
        <div className="bg-[#EBE2F5]  w-[90%] lg:w-[50%]  h-[75%]  rounded-xl  overflow-y-scroll hideScrollbar ">


          {/* header */}
          <div className="flex leading-none items-center sticky top-0 bg-[#60B0F4]  left-0 box-border  justify-between w-full overflow-hidden z-50 border-b-2 py-3  ">
            <div className=" flex  justify-between mx-6 w-full items-baseline ">
              <FaArrowRight  onClick={close} className=" text-white cursor-pointer" />
              <Button className=" bg-white border-2 text-slate-950 border-[#9747FF] rounded-lg" >Book Now </Button>
            </div>


          </div>
        
              <div className=" space-y-6">
                <Image src={eventBg} alt='eventBg' className="px-2 py-1" />
                <div className=" flex flex-col py-3 px-10">
                  <h1 className="text-[1.875rem] font-bold leading-[2.269rem] ">Title</h1>
                  <p>{eventCardData.name}</p>
                  <h1 className="text-[1.875rem] font-bold leading-[2.269rem] ">Description</h1>
                  <p>{eventCardData.description}</p>
                  <h1 className="text-[1.875rem] font-bold leading-[2.269rem] ">Date & Time</h1>
                  <p>{eventCardData.dateTime.date}</p>
                  <h1 className="text-[1.875rem] font-bold leading-[2.269rem] ">Duration</h1>
                  <p>{eventCardData.duration}</p>
                  <h1 className="text-[1.875rem] font-bold leading-[2.269rem] ">Medium</h1>
                  <p>{eventCardData.type}</p>
                  <h1 className="text-[1.875rem] font-bold leading-[2.269rem] ">Registration</h1>
                  <p>{eventCardData.registration}</p>

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