import { Skeleton } from "../../../components/ui/skeleton";
import React from "react";

const TableSkeleton = () => {
  return (
    <div className="flex flex-col items-center px-8 pt-24   justify-center space-y-1 ">
      <Skeleton className=" py-10    bg-black/30 w-full   rounded-md" />
      <Skeleton className=" py-6    bg-black/30 w-full   rounded-md" />
      
    </div>
  );
};

export default TableSkeleton;
