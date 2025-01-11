"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Common/Button";
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
} from "../../components/ui/alert-dialog";
import { useSelector } from "react-redux";
import Link from "next/link";

const EventCardModal = ({ isVisible, close, eventCardData }) => {
  const [showTicketModal, setShowTicketModal] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "container") close();
  };

  // get user status
  const isLogedIn = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {isLogedIn ? (
        <TicketCard
          eventCardData={eventCardData}
          isVisible={showTicketModal}
          close={() => setShowTicketModal(false)}
        />
      ) : null}

      <div
        onClick={handleClose}
        id="container"
        className="fixed inset-0 z-30 bg-black/25 flex justify-center items-center"
      >
        <div className="bg-[#EBE2F5] w-[80%] mt-14 lg:w-[50%] h-[90%] pb-8 rounded-xl overflow-y-scroll hideScrollbar">
          {/* header */}
          <div className="flex leading-none items-center sticky top-0 bg-[#60B0F4] left-0 box-border justify-between w-full overflow-hidden z-50 border-b-2 py-3">
            <div className="flex justify-start mx-6 py-3 w-full items-baseline">
              <FaArrowRight
                className="text-white cursor-pointer"
                onClick={close}
              />
            </div>
          </div>

          <div className="space-y-6">
            <Image
              src={eventCardData.image}
              alt="eventBg"
              height={300}
              width={600}
              className="px-2 py-1 w-full h-[300px]"
            />
            <div className="flex flex-col py-3 px-10 space-y-4">
              <h2 className="text-[1.4rem] text-[#9b57f3] font-extrabold leading-[2.269rem]">
                Title:
                <span className="text-[1.2rem] text-black ml-4 font-normal">
                  {eventCardData.Event_Name}
                </span>
              </h2>

              <h2 className="text-[1.4rem] text-[#9b57f3] font-extrabold leading-[2.269rem]">
                Date & Time:
                <span className="text-[1.2rem] text-black ml-4 font-normal">
                  {new Date(eventCardData.DateTime).toLocaleString()}
                </span>
              </h2>

              <p className="text-[1.475rem] text-[#9b57f3] font-semibold leading-[2.269rem]">
                Description:
              </p>
              <p className="text-[1.2rem] font-normal">
                {eventCardData.description}
              </p>
              <h2 className="text-[1.4rem] text-[#9b57f3] font-extrabold leading-[2.269rem]">
                Duration:
                <span className="text-[1.2rem] text-black ml-4 font-normal">
                  2-4 Hours
                </span>
              </h2>
              <h2 className="text-[1.4rem] text-[#9b57f3] font-extrabold leading-[2.269rem]">
                Medium:
                <span className="text-[1.2rem] text-black ml-4 font-normal">
                  Online
                </span>
              </h2>
              <h2 className="text-[1.4rem] text-[#9b57f3] font-extrabold leading-[2.269rem]">
                Registration:
                <span className="text-[1.2rem] text-black ml-4 font-normal">
                  Free
                </span>
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {isLogedIn ? (
              <Button
                onClick={() => setShowTicketModal(true)}
                className="bg-[#60B0F4] text-white"
              >
                Register Now
              </Button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-[#60B0F4] text-white">
                    Register Now
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Please Login to Book the Event!
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You need to login to book the event.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border border-[#9747FF]">
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCardModal;
