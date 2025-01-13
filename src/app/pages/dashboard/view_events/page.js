"use client";
import { useAuth } from "../../../../hooks/useAuth";
import ViewEvents from "../../../../components/Dashboard/View Events";


const ViewEventPage = () =>{
  const isLoged= useAuth ();
  if (!isLoged) {
    return <p>Loading...</p>; // Show loading while redirecting
  }
    return (
      <>
        <div className=" ">
          <ViewEvents/>
        </div>
    
      </>
    );
  }
  export default ViewEventPage;
  