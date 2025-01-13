"use client";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const logoutAuth = () => {


    const isLoged = useSelector((state) => state.auth.status);
    const router = useRouter();
  
    useEffect(() => {
      if (!isLoged) {
       
        router.push('/pages/login'); // Redirect to login page if logged out
      }
    }, [isLoged, router]);
    

}

export default logoutAuth