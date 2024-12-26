import ExploreEventCard from "./ExploreEventCard";
import { eventCardData } from "../../json/event.js";

const ExploreEvent = () => {
  console.log("eventCardData", eventCardData);
  return (
    <div className="pt-24">
        <h1 className="my-12 font-extrabold text-[40px] text-[#9747FF] text-center ">List of Events</h1>
      <div className="flex  flex-wrap">

        {eventCardData.map((eventCard, index) => {
          return <ExploreEventCard eventCardData={eventCard} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ExploreEvent;
