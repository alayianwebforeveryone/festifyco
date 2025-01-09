import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-12 pt-48  space-y-3 ">
      <div className="space-y-3">
        <Skeleton className="h-[125px] bg-black/30  w-[250px] rounded-xl " />
        <div className="flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[70px]" />
        </div>

        <div className="flex justify-between px-2">
          <Skeleton className="h-4 bg-black/30  w-[70px]" />
          <Skeleton className="h-4 bg-black/30 w-[70px]" />
        </div>
        <div className="flex justify-between px-2">
          <Skeleton className="h-10 bg-black/30  w-[70px] rounded-full" />
          <Skeleton className="h-10 bg-black/30 w-[70px] rounded-full" />
        </div>

      </div>
     <div className="space-y-3">
        <Skeleton className="h-[125px] bg-black/30  w-[250px] rounded-xl " />
        <div className="flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[70px]" />
        </div>

        <div className="flex justify-between px-2">
          <Skeleton className="h-4 bg-black/30  w-[70px]" />
          <Skeleton className="h-4 bg-black/30 w-[70px]" />
        </div>
        <div className="flex justify-between px-2">
          <Skeleton className="h-10 bg-black/30  w-[70px] rounded-full" />
          <Skeleton className="h-10 bg-black/30 w-[70px] rounded-full" />
        </div>

      </div>
      <div className="space-y-3">
        <Skeleton className="h-[125px] bg-black/30  w-[250px] rounded-xl " />
        <div className="flex content-center justify-center">
          <Skeleton className="h-4  bg-black/30  w-[70px]" />
        </div>

        <div className="flex justify-between px-2">
          <Skeleton className="h-4 bg-black/30  w-[70px]" />
          <Skeleton className="h-4 bg-black/30 w-[70px]" />
        </div>
        <div className="flex justify-between px-2">
          <Skeleton className="h-10 bg-black/30  w-[70px] rounded-full" />
          <Skeleton className="h-10 bg-black/30 w-[70px] rounded-full" />
        </div>

      </div>
    </div>
  );
}
