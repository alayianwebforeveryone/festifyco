"use client";

import Image from "next/image";
import authService from "@/appwrite/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.svg";
import NavComp from "./NavComp";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/app/redux /Slices/authSlice";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();
  const dispatch = useDispatch();
  const [isLogedIn, setIsLoggedIn] = useState(false);

useEffect(()=>{
      authService.getCurrentUser().
      then((userData)=>{
        if(userData){
        dispatch(login(userData))
        setIsLoggedIn(true)
        }
        else{
          console.log("not login show from menu")
          setIsLoggedIn(false)
        }
      })
      .catch((error)=>{
        console.log("gettting crrent user goes catch side", error)
        setIsLoggedIn(false)
      })
},[])


  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Explore Event",
      path: "/exploreevent",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // const currentUserData = useSelector((state) => state.auth.userData.name);
  // console.log("user data from state ", currentUserData)



  return (
    <>
      <nav className="fixed w-full z-10 bg-[#EBE2F5] ">
        <div className="flex items-center justify-between container mx-auto sm:px-4  py-3">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}
              alt="logo"
              className="h-6 w-[9rem] cursor-pointer"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div
            className="sm:hidden mx-2 cursor-pointer z-20"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <IoMdClose size={24} className="text-gray-700" />
            ) : (
              <CiMenuBurger size={24} className="text-gray-700" />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex space-x-2 md:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavComp
                    link={link.path}
                    title={link.title}
                    isActive={path === link.path}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}

          {
            isLogedIn ? (
               <div className="hidden sm:flex space-x-2">
               <Link href="/dashboard" className="cursor-pointer">
                 <Button> Dashboard</Button> 
               </Link>
             
               <Link href="/signUp" className="cursor-pointer">
                 <Button>
                   Logout
                 </Button>
               </Link>
              
             
              </div>
              
            ):(
              <div className="hidden sm:flex space-x-2">
              <Link href="/login" className="cursor-pointer">
                <Button>Sign up</Button> 
              </Link>
            
              <Link href="/signUp" className="cursor-pointer">
                <Button>
                  Login
                </Button>
              </Link>
             
            
              </div>
            )
          }
           
         </div>
       

        {/* Mobile Menu */}
        {showMenu && (
          <div className="sm:hidden  flex flex-col content-center items-center absolute top-16 left-0 w-full bg-[#EBE2F5] shadow-lg rounded-b-lg">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={toggleMenu}
                className={`block py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 ${
                  path === link.path ? "bg-gray-200" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}

            <div className="flex flex-col items-center space-y-3 justify-center py-4">
              <Link href="/" onClick={toggleMenu} >
                <Button text="Login" />
              </Link>
              <Link href="/login" onClick={toggleMenu} >
                <Button text="SignUp" colorClass="bg-[#9747FF]" />
              </Link>
            </div>
          </div>
         
        )}
      </nav>
    </>
  );
}



  


export default Menu;
