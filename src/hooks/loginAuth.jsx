"use client";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const loginAuth = () => {
    const isLoged = useSelector((state) => state.auth.status);
  const router = useRouter();

  useEffect(() => {
    if (isLoged) {
      router.push('/'); // Redirect to homepage or dashboard if already logged in
    }
  }, [isLoged, router]);
  
}

export default loginAuth