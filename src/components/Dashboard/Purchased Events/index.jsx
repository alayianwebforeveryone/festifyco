"use client";
import TableComp from "../../../components/Common/Table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchasedServicesData } from "../../../app/redux/Slices/userEventSlice";
import TableSkeleton from "./TableSkeleton";

const PurchasedEvents = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set isLoading to true before fetching data
      await dispatch(fetchPurchasedServicesData());
      setIsLoading(false); // Set isLoading to false after data is fetched
    };

    fetchData();
  }, [dispatch]);

  const purchasedEvents = useSelector((state) => state.events.purchasedServices);
 

  return (
    <div>
      {isLoading ? (
        <TableSkeleton />
      ) : purchasedEvents && purchasedEvents.length > 0 ? (
        <TableComp type="registeredEvents" tableData={purchasedEvents} />
      ) : (
       
          <div className="text-[32px] px-24  font-bold pt-32  text-3xl text-center text-[#9747FF]">
            No data available
          </div>
      )}
    </div>
  );
};

export default PurchasedEvents;
