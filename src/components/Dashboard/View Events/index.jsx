"use client";
import TableComp from "@/components/Common/Table";
import React, { useEffect, useState } from "react";
import availableEvents from "@/app/pages/appwrite/availableEvents";

const ViewEvents = () => {
  const [tableData, setTableData] = useState(null);
  console.log("table data", tableData);
  useEffect( () => {
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
        
        <TableComp  type= "availabelEvents"  eventTableData={tableData} />
    </div>
  );
};
export default ViewEvents;
