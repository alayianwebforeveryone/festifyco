"use client";

import Image from "next/image";
import authService from "../../app/pages/appwrite/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "../../../Assets/Images/logo.png";
import NavComp from "./NavComp";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../app/redux/Slices/authSlice";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.status);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          console.log("User not logged in");
        }
      })
      .catch((error) => {
        console.log("Error fetching current user", error);
      });
  }, [dispatch]);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Explore Event",
      path: "/pages/exploreevent",
    },
    {
      title: "Services",
      path: "/pages/services",
    },
    {
      title: "Contact",
      path: "/pages/contact",
    },
  ];

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed w-full z-10 bg-[#EBE2F5]  ">
        <div className="flex items-center justify-between lg:justify-between container mx-auto px-6 sm:px-0 md:px-2 py-3">
          {/* Logo */}

          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}
              alt="logo"
              className=" w-[5rem] sm:w-[4rem] md:w-[6rem] cursor-pointer"
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
            <ul className="flex space-x-3 md:space-x-8">
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

          {isLoggedIn ? (
            <div className="hidden sm:flex space-x-2">
              <Link href="/pages/logout" className="cursor-pointer">
                <Button className=" text-white bg-[#60B0F4]">Logout</Button>
              </Link>
              <Link href="/pages/dashboard" className="cursor-pointer">
                <Button className=" text-white  bg-[#9747FF]">Dashboard</Button>
              </Link>
            </div>
          ) : (
            <div className="hidden sm:flex space-x-2">
              <Link href="/pages/login" className="cursor-pointer">
                <Button className=" text-white bg-[#60B0F4]">Login</Button>
              </Link>
              <Link href="/pages/signup" className="cursor-pointer">
                <Button className="text-white bg-[#9747FF]">Sign up</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="sm:hidden text-left  pb-8 text-white    flex flex-col   absolute top-16 left-0 w-full bg-[#9747FF] shadow-lg ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={toggleMenu}
                className={`block py-3 px-4 border-b last:border-b-0 font-lg hover:bg-gray-100 ${
                  path === link.path ? "  bg-[#60B0F4]" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="  flex flex-col  text-xl font-extrabold text-white mt-8 ">
                <Link href="/pages/logout" className="cursor-pointer  ">
                  <Button className="  border-2 w-[80%] border-[#60B0F4] text-red-300  ">
                    Logout
                  </Button>
                </Link>
                <Link href="/pages/dashboard" className="cursor-pointer">
                  <Button className=" mt-4    border-2 w-[80%] border-[#60B0F4]  bg-[#9747FF]">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="  flex flex-col  text-xl font-extrabold text-white mt-8 ">
                <Link href="/pages/login" className="cursor-pointer  ">
                  <Button className="  border-2 w-[80%] border-[#60B0F4] text-red-300  ">
                    Loign
                  </Button>
                </Link>
                <Link href="/pages/signup" className="cursor-pointer">
                  <Button className=" mt-4    border-2 w-[80%] border-[#60B0F4]  bg-[#9747FF]">
                    Signup
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Menu;
