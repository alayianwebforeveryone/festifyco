"use client";
import TableComp from "@/components/Common/Table";
import React, { useEffect, useState } from "react";
import availableEventsServices from "@/app/pages/appwrite/availableEvents";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchasedServicesData } from "@/app/redux/Slices/userEventSlice";
import TableSkeleton from "./TableSkeleton";

const PurchasedEvents = () => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); 
    // useEffect(() => {
    //   dispatch(fetchPurchasedServicesData());
    // }, [dispatch]);
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true); // Step 2: Set isLoading to true before fetching data
        await dispatch(fetchPurchasedServicesData());
        setIsLoading(false); // Step 3: Set isLoading to false after data is fetched
      };
  
      fetchData();
    }, [dispatch]);

  const purchasedEvents = useSelector((state) => state.events.purchasedServices);
    console.log("Purchased Events in registered:", purchasedEvents);
 

  return isLoading?(
    <TableSkeleton />
  ):(
    <div>
      <TableComp type= "registeredEvents" tableData= {purchasedEvents} />
    </div>
  );
};
export default PurchasedEvents;
