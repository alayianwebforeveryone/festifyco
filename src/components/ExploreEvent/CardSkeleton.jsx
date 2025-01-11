import { Skeleton } from "../../components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="  md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-16 px-10 md:px-40 pt-12 ">
      <div className="bg-black/20 rounded-2xl px-6 py-4  ">
        <Skeleton className="h-[160px]   bg-black/30   rounded-xl " />
        <div className=" my-4 flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[150px]" />
        </div>

        <div className=" my-4 flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[120px]" />
        </div>
        <div className="flex justify-between ">
          <Skeleton className="h-10 bg-black/30  w-[120px] rounded-full" />
          <Skeleton className="h-10 bg-black/30 w-[120px] rounded-full" />
        </div>

      </div>

      <div className="bg-black/20 hidden md:block rounded-2xl px-6 py-4 ">
        <Skeleton className="h-[160px]   bg-black/30   rounded-xl " />
        <div className=" my-4 flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[150px]" />
        </div>

        <div className=" my-4 flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[120px]" />
        </div>
        <div className="flex justify-between ">
          <Skeleton className="h-10 bg-black/30  w-[120px] rounded-full" />
          <Skeleton className="h-10 bg-black/30 w-[120px] rounded-full" />
        </div>

      </div>

      <div className="bg-black/20 hidden md:block rounded-2xl px-6 py-4 ">
        <Skeleton className="h-[160px]   bg-black/30   rounded-xl " />
        <div className=" my-4 flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[150px]" />
        </div>

        <div className=" my-4 flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[120px]" />
        </div>
        <div className="flex justify-between ">
          <Skeleton className="h-10 bg-black/30  w-[120px] rounded-full" />
          <Skeleton className="h-10 bg-black/30 w-[120px] rounded-full" />
        </div>

      </div>
   
    </div>
  );
}
