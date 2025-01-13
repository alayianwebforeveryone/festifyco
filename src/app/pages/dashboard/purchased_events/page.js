"use client";
import { useAuth } from "../../../../hooks/useAuth";

import PurchasedEvents from "../../../../components/Dashboard/Purchased Events";


const RegisteredEventsPage = () =>{
    const isLoged= useAuth ();
    if (!isLoged) {
      return <p>Loading...</p>; // Show loading while redirecting
    }
    return (
      <>
        <div className=" ">
          <PurchasedEvents/>
        </div>
    
      </>
    );
  }
  export default RegisteredEventsPage;
  