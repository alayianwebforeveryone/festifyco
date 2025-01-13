"use client";
import { useAuth } from "../../../../hooks/useAuth";
import CreateEvent from "../../../../components/Dashboard/CreateEvent";


const CreateEventsPage = () =>{
  const isLoged= useAuth ();
  if (!isLoged) {
    return <p>Loading...</p>; // Show loading while redirecting
  }
    return (
      <>
<CreateEvent/>
    
      </>
    );
  }
  export default CreateEventsPage;
  