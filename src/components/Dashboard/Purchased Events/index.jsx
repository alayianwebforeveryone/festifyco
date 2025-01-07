"use client";
import TableComp from "@/components/Common/Table";
import React, { useEffect, useState } from "react";
import availableEventsServices from "@/app/pages/appwrite/availableEvents";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchasedServicesData } from "@/app/redux/Slices/userEventSlice";

const PurchasedEvents = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPurchasedServicesData());
    }, [dispatch]);


  const purchasedEvents = useSelector((state) => state.events.purchasedServices);
    console.log("Purchased Events in registered:", purchasedEvents);
 

  return (
    <div>
      <TableComp type= "registeredEvents" tableData= {purchasedEvents} />
    </div>
  );
};
export default PurchasedEvents;
