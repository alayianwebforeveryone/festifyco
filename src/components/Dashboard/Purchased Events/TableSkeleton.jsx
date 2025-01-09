import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const TableSkeleton = () => {
  return (
    <div className='px-20 pt-20 '>
    <div className="flex flex-col justify-center  space-y-1 ">
    
      <Skeleton className=" h-[30px]  bg-black/30 w-[600px] sm:w-[800px] md:w-[1400px] rounded-md" />
    
      

      
      <div className="flex flex-col content-center justify-center space-y-1">
        <Skeleton className="h-10  bg-black/30 w-[600px] sm:w-[800px] md:w-[1400px]" />
        <Skeleton className="h-10  bg-black/30  w-[600px] sm:w-[800px] md:w-[1400px]" />
        <Skeleton className="h-10  bg-black/30  w-[600px] sm:w-[800px] md:w-[1400px]" />
        <Skeleton className="h-10  bg-black/30  w-[600px] sm:w-[800px] md:w-[1400px]" />
        <Skeleton className="h-10  bg-black/30  w-[600px] sm:w-[800px] md:w-[1400px]" />
        <Skeleton className="h-10  bg-black/30  w-[600px] sm:w-[800px] md:w-[1400px]" />
      </div>
      </div>

    
  
   
  </div>
  )
}

export default TableSkeleton