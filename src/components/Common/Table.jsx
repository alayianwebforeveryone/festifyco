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
} from "../../components/ui/table";
import { PaginationComp } from "./PaginationComp";
import { SelectBox } from "./SelectBox";
import Button from "./Button";
import EventCardModal from "../ExploreEvent/EventCardModal";

// Utility function to calculate days remaining
const calculateDaysRemaining = (eventDate) => {
  const today = new Date();
  const eventDateTime = new Date(eventDate);
  const timeDiff = eventDateTime - today;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert ms to days
};

const TableComp = ({ type, tableData }) => {
  const [processedData, setProcessedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectType, setSelectType] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const rowsPerPage = 7; // Number of rows per page
  const totalPages = Math.ceil(processedData.length / rowsPerPage);

  // Perform the calculation only on the client side
  const filterValue = ["All", "Past", "Upcoming"];


  useEffect(() => {
    if (tableData && tableData.length > 0) {
      const updatedData = tableData.map((event) => {
   

        const daysRemaining = calculateDaysRemaining(event.date);
      
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
  }, [tableData]);


  const filteredData = processedData.filter((row) => {

    if (selectType === "Upcoming") return !row.isPassed; // Only upcoming events
    if (selectType === "Past") return row.isPassed; // Only past events
    return true;
  });


  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Show a message if no data is available
  if (!processedData || processedData.length === 0) {
   null
  }

  return (
    <div className="bg-[#E7EEF0]     py-6 px-2  xl:px-8 rounded-[22px]  ">
      <div className="flex justify-end   top-0 mb-4  pr-8 ">
        <SelectBox type="table" values={filterValue} setSelectType={setSelectType} />
      </div>

      <Table className=" ">
        <TableHeader className="bg-[#E2D0FA]">
          <TableRow>
            <TableHead className="font-bold text-[16px] xl:text-[24px]">ID</TableHead>
            <TableHead className="font-bold text-[16px] xl:text-[24px]">Event Name</TableHead>
            <TableHead className="font-bold text-[16px] xl:text-[24px]">Date & Time</TableHead>
            <TableHead className="font-bold text-[16px] xl:text-[24px]">Status</TableHead>
            {type === "viewEventsData" && (
              <TableHead className="font-bold text-[16px] xl:text-[24 px]">Action</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <>
              <EventCardModal
                eventCardData={selectedEvent}
                isVisible={showModal}
                close={() => setShowModal(false)}
              />
              <TableRow className="bg-white" key={rowIndex}>
                <TableCell className="xl:text-[18px] text-[14px] ">{row.$id}</TableCell>
                <TableCell className="xl:text-[18px] text-[14px] ">{row.eventName}</TableCell>
                <TableCell className="xl:text-[18px] text-[14px] ">
                  {new Date(row.date).toLocaleString()}
                </TableCell>

                <TableCell
                  className={`] font-bold xl:text-[18px] text-[14px]  ${
                    row.isPassed ? "text-red-500 " : "text-[#9747FF]"
                  }`}
                >
                  {row.status}
                </TableCell>
                {type === "viewEventsData" && (
                  <TableCell className="xl:text-[18px] text-[14px] ">
                    {!row.isPassed ? (
                      <Button
                        onClick={() => {
                          setSelectedEvent(row);
                          setShowModal(true);
                        }}
                        className="bg-[#9747FF] text-white px-2 py-2 rounded-[10px] "
                      >
                        Register
                      </Button>
                    ) : (
                      <Button className="bg-[#C8C5CC] text-white px-4 py-2 rounded-[10px] ">
                        Register
                      </Button>
                    )}
                  </TableCell>
                )}
              </TableRow>
            </>
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
