
"use client";
import React from "react";

import { planData } from '../../../json/event.js';
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { useSelector } from "react-redux";
import Button from "@/components/Common/Button.jsx";

const SinglePlanCard = ({ isOpen, onClose, planType }) => {
  const isLogedIn = useSelector((state) => state.auth.status);

  if (!isOpen) return null;

  // Filter the plan data to find the matching plan
  const selectedPlan = planData.find((plan) => plan.planName === planType);

  return (
    <>
      <div className="mt-60 mb-20 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
        <div className="w-[90%] mx-auto flex justify-center py-8">
          {selectedPlan ? (
            <div
              key={selectedPlan.planName}
              className="w-[70%] sm:w-[45%] lg:w-[25%] space-y-6 border-2 bg-[#E2D0FA] border-[#9747FF] p-6 flex flex-col"
            >
              <Button className="bg-[#60B0F4] rounded-md w-[60%] mx-auto cursor-default">
                {selectedPlan.planName}
              </Button>
              <h1 className="font-bold text-lg text-center">Venues</h1>

              {/* Venues */}
              <div className="space-y-2">
                {selectedPlan.venues.map((venue, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="rounded-full p-1 bg-[#9747FF]">
                      <TiTick className="text-white" />
                    </span>
                    <p className="text-sm">{venue}</p>
                  </div>
                ))}
              </div>

              <h1 className="font-bold text-lg text-center">Menu</h1>

              {/* Menu */}
              <div className="space-y-2">
                {selectedPlan.menu.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="rounded-full p-1 bg-[#9747FF]">
                      <TiTick className="text-white" />
                    </span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>

           
              <Button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-[#60B0F4] text-white rounded-lg"
              >
                Close
              </Button>
            </div>
          ) : (
            <p className="text-white text-center">Plan not found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePlanCard;

