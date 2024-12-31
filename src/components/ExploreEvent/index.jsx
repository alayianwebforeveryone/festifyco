"use client";

import ExploreEventCard from "./ExploreEventCard";
import availableEvents from "@/app/pages/appwrite/availableEvents";
import { useEffect, useState } from "react";

const ExploreEvent = () => {
  // Local state to store fetched events
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await availableEvents.getAllEvents();
        setEvents(data); // Set fetched data in state
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="pt-24 px-20">
      <h1 className="my-12 font-extrabold text-[40px] text-[#9747FF] text-center">
        List of Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-24">
        {events.length > 0 ? (
          events.map((event, index) => (
            <ExploreEventCard eventCardData={event} key={index} />
          ))
        ) : (
          <p className="text-center col-span-3">No events found</p>
        )}
      </div>
    </div>
  );
};

export default ExploreEvent;
