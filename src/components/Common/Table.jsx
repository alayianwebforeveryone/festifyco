"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PaginationComp } from "./PaginationComp";
import { FilterTableData } from "../Dashboard/View Events/FilterTableData";
import Button from "./Button";

// Utility function to calculate days remaining
const calculateDaysRemaining = (eventDate) => {
  const today = new Date();
  const eventDateTime = new Date(eventDate);
  const timeDiff = eventDateTime - today;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert ms to days
};

const TableComp = ({ eventTableData }) => {
  const [processedData, setProcessedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("past");
  const rowsPerPage = 7; // Number of rows per page
  const totalPages = Math.ceil(processedData.length / rowsPerPage);

 

  // Perform the calculation only on the client side
  useEffect(() => {
    if (eventTableData && eventTableData.length > 0) {
      const updatedData = eventTableData.map((event) => {
        const daysRemaining = calculateDaysRemaining(event.DateTime);
        return {
          ...event,
          status:
            daysRemaining > 0
              ? `${daysRemaining} Days remaining`
              : "Event Passed",
          isPassed: daysRemaining <= 0, // Add a flag for passed events
        };
      });
      setProcessedData(updatedData);
    }
  }, [eventTableData]);

  const filteredData = processedData.filter((row) => {
    console.log('filterType', filterType)
    if (filterType === "upcoming") return !row.isPassed; // Only upcoming events
    if (filterType === "past") return row.isPassed; // Only past events
    return true;
  });

  console.log('filteredData', filteredData)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

 


  // Show a message if no data is available
  if (!processedData || processedData.length === 0) {
    return (
      <div className="text-[24px] text-center text-[#9747FF]">
        No data available
      </div>
    );
  }

  return (
    <div className="bg-[#E7EEF0] py-12 px-8 rounded-[22px]">
      <div className="flex justify-end pr-8 ">
        <FilterTableData setFilterType = {setFilterType} />
      </div>
      <Table>
        <TableHeader className="bg-[#E2D0FA]">
          <TableRow>
            <TableHead className="font-bold text-[24px]">ID</TableHead>
            <TableHead className="font-bold text-[24px]">Event Name</TableHead>
            <TableHead className="font-bold text-[24px]">Date & Time</TableHead>
            <TableHead className="font-bold text-[24px]">Status</TableHead>
            <TableHead className="font-bold text-[24px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow className="bg-white" key={rowIndex}>
              <TableCell className="text-[18px]">{row.id}</TableCell>
              <TableCell className="text-[18px]">{row.Event_Name}</TableCell>
              <TableCell className="text-[18px]">
                {new Date(row.DateTime).toLocaleString()}
              </TableCell>
              <TableCell
                className={`text-[18px] ${
                  row.isPassed ? "text-red-500" : "text-green-500"
                }`}
              >
                {row.status}
              </TableCell>
              <TableCell className="text-[18px]">
              {
                !row.isPassed && (
                  <Button
                  className="bg-[#9747FF] text-white px-4 py-2 rounded-[10px] "
                  >
                     Register
                  </Button>
             )
            }
             </TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <PaginationComp
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TableComp;
