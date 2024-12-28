import ExploreEventCard from "./ExploreEventCard";
import { eventCardData } from "../../json/event.js";

const ExploreEvent = () => {
  console.log("eventCardData", eventCardData.name);
  return (
    <div className="pt-24 px-20">
        <h1 className="my-12 font-extrabold text-[40px] text-[#9747FF] text-center ">List of Events</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 max-w-7xl mx-auto gap-24 ">

        {eventCardData.map((eventCard, index) => {
          return <ExploreEventCard eventCardData={eventCard} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ExploreEvent;
