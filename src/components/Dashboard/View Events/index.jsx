"use client";
import TableComp from "@/components/Common/Table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvailableServicesData } from "@/app/redux/Slices/userEventSlice";
import TableSkeleton from "../Purchased Events/TableSkeleton";

const ViewEvents = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    const fetchData = async () => {
      alert("available events")
      setIsLoading(true); // Set isLoading to true before fetching data
      await dispatch(fetchAvailableServicesData());
      setIsLoading(false); // Set isLoading to false after data is fetched
    };

    fetchData();
  }, [dispatch]);

  const availableEvents = useSelector((state) => state.events.availableEvents);
  console.log("available Events in view:", availableEvents);

  return (
    <div>
      {isLoading ? (
        <TableSkeleton />
      ) : availableEvents && availableEvents.length > 0 ? (
        <TableComp type="viewEventsData" tableData={availableEvents} />
      ) : (
       
          <div className="text-[32px] px-24  font-bold pt-32  text-3xl text-center text-[#9747FF]">
            No data available
          </div>
      )}
    </div>
  );
};

export default ViewEvents;
