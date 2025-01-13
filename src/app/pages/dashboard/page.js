"use client";
import { useAuth } from '../../../hooks/useAuth'

import { Stats } from "../../../components/Dashboard/Stats";


const HomePage = () =>{
     const isLoged= useAuth();
      if (!isLoged) {
        return <p>Loading...</p>; // Show loading while redirecting
      }
  return (
    <>
          <Stats/>
  
    </>
  );
}
export default HomePage;
