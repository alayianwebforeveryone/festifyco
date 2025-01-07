"use client";
import Image from "next/image";
import dateIcon from "../../../Assets/icons/date.svg";
import React, { useState } from "react";
import EventCardModal from "./EventCardModal";
import TicketCard from "./TicketCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useSelector } from "react-redux";
import Button from "../Common/Button";
import Link from "next/link";

const ExploreEventCard = ({ eventCardData }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);

  // handle book now
  const isLogedIn = useSelector((state) => state.auth.status);
 

  return (
    <>
      {
      isLogedIn ?(
        <TicketCard
          eventCardData={eventCardData}
          isVisible={showTicketModal}
          close={() => setShowTicketModal(false)}
        />
      ):null
    }
      <EventCardModal
        eventCardData={eventCardData}
        isVisible={showModal}
        close={() => setShowModal(false)}
      />

      <div className="border-2 w-[335px] md:w-full mx-auto border-[#9747FF] bg-[#D9D9D9] rounded-[20px] lg:px-4 px-2 pt-2 md:py-2 lg:py-3 pb-3 mb-8">
        <figure className="w-full h-[168px] flex justify-center items-center overflow-hidden rounded-[16px]">
          <Image
            src={eventCardData.image}
            alt={eventCardData.Event_Name}
            width={400}
            height={100}
          />
        </figure>
        <div className="flex flex-col space-y-3 mt-2">
          <h2 className="text-center font-bold">{eventCardData.eventName}</h2>

          <div className="flex my-2 justify-center">
            <div className="flex gap-2 justify-center">
              <Image
                className="block md:hidden lg:block"
                src={dateIcon}
                alt="date"
                height={20}
                width={20}
              />
              <span>
                {new Date(eventCardData.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            {!isLogedIn ? (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className=" bg-[#60B0F4] text-white ">
                    Book Now
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Plese Login to Book the Event!
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You need to login to book the event.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border border-[#9747FF] ">
                      Cancel
                    </AlertDialogCancel>
                    <Link href="/pages/login">
                      <AlertDialogAction className="bg-[#9747FF]">
                        Login
                      </AlertDialogAction>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <>
                <Button
                  onClick={() => setShowTicketModal(true)}
                  className=" bg-[#60B0F4] text-white "
                >
                  Book Now
                </Button>
              </>
            )}

            <button
              onClick={() => setShowModal(true)}
              className="bg-white border border-[#9747FF] rounded-full text-black px-6 md:px-3 lg:px-6 py-2"
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
