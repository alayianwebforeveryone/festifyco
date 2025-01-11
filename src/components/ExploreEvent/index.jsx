// // // "use client";

// // // import ExploreEventCard from "./ExploreEventCard";
// // // import availableEventsServices from "@/app/pages/appwrite/availableEvents";
// // // import { useEffect, useState } from "react";
// // // import { SkeletonCard } from "./CardSkeleton";

// // // const ExploreEvent = () => {
// // //   // Local state to store fetched events
// // //   const [events, setEvents] = useState([]);
// // //   const [isloading, setIsLoading ] = useState(true)

// // //   useEffect(() => {
// // //     const fetchEvents = async () => {
// // //       try {
// // //         const data = await availableEventsServices.getAllEvents();
// // //         setEvents(data);
// // //          setIsLoading(false)
// // //          // Set fetched data in state
// // //       } catch (error) {
// // //         console.error("Error fetching events:", error);
// // //       }
// // //     };
// // //     fetchEvents();
// // //   }, []);

// // // isloading ?   (

// // //     <SkeletonCard/>

// // // ):(

// // //     <div className="pt-24 px-20">
// // //       <h1 className="my-12 font-extrabold text-[40px] text-[#9747FF] text-center">
// // //         List of Events
// // //       </h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-24">
// // //         {events.length > 0 ? (
// // //           events.map((event, index) => (
// // //             <ExploreEventCard eventCardData={event} key={index} />
// // //           ))
// // //         ) : (
// // //           <p className="text-center col-span-3">No events found</p>
// // //         )}
// // //       </div>
// // //     </div>

// // //       )

// // // };

// // // export default ExploreEvent;

// // "use client";

// // import ExploreEventCard from "./ExploreEventCard";
// // import availableEventsServices from "@/app/pages/appwrite/availableEvents";
// // import { useEffect, useState } from "react";
// // import { SkeletonCard } from "./CardSkeleton";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchAvailableServicesData } from "@/app/redux/Slices/userEventSlice";

// // const ExploreEvent = () => {
// //   // Local state to store fetched events
// //   const [events, setEvents] = useState([]);
// //   const [isloading, setIsLoading] = useState(true);
// //   const dispatch = useDispatch()

// //     useEffect(() => {
// //        const fetchData = async () => {
// //          setIsLoading(true); // Set isLoading to true before fetching data
// //          await dispatch(fetchAvailableServicesData());
// //          setIsLoading(false); // Set isLoading to false after data is fetched
// //        };

// //        fetchData();
// //      }, [dispatch]);

// //      const availableEvents = useSelector((state) => state.events.availableEvents);
// //      console.log("available Events in explore event:", availableEvents);

// //   // Return the component UI
// //   return isloading ? (
// //     <SkeletonCard />
// //   ) : (
// //     <div className="pt-24 px-6 sm:px-2 md:px-2 lg:px-6 mx-auto container ">
// //       <h1 className="my-12 font-extrabold text-[30px] text-[#9747FF] text-center">
// //         List of Events
// //       </h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8   gap-24  ">
// //         {availableEvents.length > 0 ? (
// //           events.map((events, index) => (
// //             <ExploreEventCard eventCardData={events} key={index} />
// //           ))
// //         ) : (
// //           <p className="text-center col-span-3">No events found</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExploreEvent;

// "use client";

// import ExploreEventCard from "./ExploreEventCard";
// import { SkeletonCard } from "./CardSkeleton";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAvailableServicesData } from "@/app/redux/Slices/userEventSlice";
// import { useEffect, useState } from "react";
// import Heading from "../Common/Heading";

// const ExploreEvent = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const dispatch = useDispatch();
//   const availableEvents = useSelector((state) => state.events.availableEvents); // Select the data from Redux

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true); // Set isLoading to true before fetching data
//       await dispatch(fetchAvailableServicesData()); // Dispatch Redux action
//       setIsLoading(false); // Set isLoading to false after fetching data
//     };

//     fetchData();
//   }, [dispatch]);

//   // Return the component UI
//   return (
//     <div className="px-12">
//       <Heading title="List of Events" />
//       {isLoading ? (
//         <SkeletonCard />
//       ) : (
//         <div className="pt-12  sm:px-2 md:px-2 lg:px-6 mx-auto container ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-16">
//             {availableEvents && availableEvents.length > 0 ? (
//               availableEvents.map((event, index) => (
//                 <ExploreEventCard eventCardData={event} key={index} />
//               ))
//             ) : (
//               <p className="text-center col-span-3">No events found</p>
//             )}
            
           
//           </div>
//           <div className="text-center font-bold text-[28px] my-12 text-[#9747FF] ">
//               No more Event Available
//             </div>
//         </div>
//       )}
      
//     </div>
//   );
// };

// export default ExploreEvent;




"use client";

import ExploreEventCard from "./ExploreEventCard";
import { SkeletonCard } from "./CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvailableServicesData } from "../../app/redux/Slices/userEventSlice";
import { useEffect, useState, useRef } from "react";
import Heading from "../Common/Heading";

const ExploreEvent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleEvents, setVisibleEvents] = useState([]); // To manage events currently visible
  const [page, setPage] = useState(1); // Current page number
  const ITEMS_PER_PAGE = 3; // Number of items per page

  const dispatch = useDispatch();
  const availableEvents = useSelector((state) => state.events.availableEvents); // Select events from Redux
  const loaderRef = useRef(null); // Ref for lazy-loading

  // Fetch events on initial render
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(fetchAvailableServicesData());
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch]);

  // Load initial chunk of events
  useEffect(() => {
    if (availableEvents.length > 0) {
      const initialEvents = availableEvents.slice(0, ITEMS_PER_PAGE);
      setVisibleEvents(initialEvents);
    }
  }, [availableEvents]);

  // Load more events when the user scrolls or interacts with "Load More"
  const loadMore = () => {
    const nextIndex = page * ITEMS_PER_PAGE;
    const newEvents = availableEvents.slice(0, nextIndex + ITEMS_PER_PAGE);
    setVisibleEvents(newEvents);
    setPage((prevPage) => prevPage + 1);
  };

  // Intersection Observer to detect when to load more
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleEvents.length < availableEvents.length) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect(); // Cleanup observer
  }, [visibleEvents, availableEvents]);

  // Render the component
  return (
    <div className=" px-2 md:px-12">
      <Heading title="List of Events" />
      {isLoading ? (
            <SkeletonCard  />
    
      ) : (
        <div className="pt-12 sm:px-2 md:px-2 lg:px-6 mx-auto container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-16">
            {visibleEvents && visibleEvents.length > 0 ? (
              visibleEvents.map((event, index) => (
                <ExploreEventCard eventCardData={event} key={index} />
              ))
            ) : (
              <p className="text-center col-span-3">No events found</p>
            )}
          </div>
          {visibleEvents.length < availableEvents.length ? (
            <div ref={loaderRef} className="text-center my-12">
              <button
                onClick={loadMore}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Load More
              </button>
            </div>
          ) : (
            <div className="text-center font-bold text-[28px] my-12 text-[#9747FF]">
              No more events available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExploreEvent;
