"use client";
import { useRouter } from "next/navigation";
import { useEffect} from 'react';
import { useSelector } from 'react-redux';

export function useAuth() {
    
    const router = useRouter();
    const isLoged = useSelector((state) => state.auth.status);
    

    useEffect(() => {

        
   

        if (!isLoged) {
            router.push('/'); // Redirect if not authenticated
        }
       

    }, [isLoged, router]);

    return isLoged



}

