"use client"
import Image from "next/image";
import dateIcon from "../../../Assets/icons/date.svg";
import React, { useState } from "react";
import EventCardModal from "./EventCardModal";
import TicketCard from "./TicketCard";

const ExploreEventCard = ({ eventCardData }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTicketModal, setTicketModal] = useState(false);
  return (
    <>
    <TicketCard eventCardData={eventCardData } isVisible={showTicketModal} close={() => setTicketModal(false)} />
      <EventCardModal eventCardData={eventCardData } isVisible={showModal} close={() => setShowModal(false)} />

      <div className="border-2 w-[80%] sm:w-[100%] md:w-[100%] mx-auto border-[#9747FF] bg-[#D9D9D9] rounded-[20px] lg:px-4 px-2 pt-2 md:py-2 lg:py-3 pb-3 mb-8">
        <figure className="w-full h-[168px] md:h-[120px] lg:h-[168px] flex justify-center items-center overflow-hidden rounded-[16px]">
          <Image
            src={eventCardData.image}
            alt={eventCardData.Event_Name}
           
         
            width={400}
          height={100}
          />
        </figure>
        <div className=" flex flex-col space-y-3 mt-2 ">
          <h2 className="text-center font-bold">{eventCardData.Event_Name}</h2>

          <div className=" flex  my-2 justify-center">
          <div className=" flex gap-2 justify-center">
            <Image className="block md:hidden lg:block" src={dateIcon} alt="date" height={20} width={20} />
            <span>{eventCardData.DateTime}</span>
            </div>
           
             
              
           
          </div>
          <div className=" flex justify-between">
          <button
            onClick={() => setTicketModal(true)}
            className="bg-[#009FE3] rounded-full text-black px-6 md:px-3  lg:px-6 py-2"
          >
            Book Now 
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white border border-[#9747FF] rounded-full text-black   px-6 md:px-3  lg:px-6 py-2"
          >
           Details
          </button>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default ExploreEventCard;
