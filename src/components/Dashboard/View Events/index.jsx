"use client";
import TableComp from "@/components/Common/Table";
import React, { useEffect, useState } from "react";
import availableEvents from "@/app/pages/appwrite/availableEvents";

const ViewEvents = () => {
  const [tableData, setTableData] = useState(null);
  console.log("table data", tableData);
  useEffect(async () => {
    try {
      const data = await availableEvents.getAllEvents();
      console.log(data);
      setTableData(data);
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <div>
      <div>
        
        <TableComp   eventTableData={tableData} />
      </div>
    </div>
  );
};
export default ViewEvents;
