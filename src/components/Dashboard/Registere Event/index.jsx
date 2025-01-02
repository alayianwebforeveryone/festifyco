"use client";
import TableComp from "@/components/Common/Table";
import React, { useEffect, useState } from "react";
import availableEvents from "@/app/pages/appwrite/availableEvents";

const RegisteredEvents = () => {
  const [tableData, setTableData] = useState(null);
  console.log("table data", tableData);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await availableEvents.getAllEvents();
        console.log(data);
        setTableData(data);
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <TableComp type= "registeredEvents" eventTableData={tableData} />
    </div>
  );
};
export default RegisteredEvents;
