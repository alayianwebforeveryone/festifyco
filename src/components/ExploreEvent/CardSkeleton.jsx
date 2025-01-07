import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-12 pt-48  space-y-3 ">
      <div>
        <Skeleton className="h-[125px] bg-black/30  w-[250px] rounded-xl" />
        <div className=" flex">
          <Skeleton className="h-4 bg-black/30  w-[250px]" />
          <Skeleton className="h-4 bg-black/30 w-[200px]" />
        </div>
      </div>
      <div>
        <Skeleton className="h-[125px] bg-black/30 w-[250px] rounded-xl" />
        <div className="">
          <Skeleton className="h-4 bg-black/30  w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div>
        <Skeleton className="h-[125px] bg-black/30 w-[250px] rounded-xl" />
        <div className="">
          <Skeleton className="h-4 bg-black/30 w-[250px]" />
          <Skeleton className="h-4 bg-black/30 w-[200px]" />
        </div>
      </div>
       <div>
        <Skeleton className="h-[125px] bg-black/30 w-[250px] rounded-xl" />
        <div className="">
          <Skeleton className="h-4 bg-black/30 w-[250px]" />
          <Skeleton className="h-4 bg-black/30 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
