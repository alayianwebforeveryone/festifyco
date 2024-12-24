"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import NavComp from "./NavComp";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../Common/Button";

const Menu = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();

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
          <div className="hidden sm:flex space-x-2">
            <Link href="/" className="cursor-pointer">
              <Button text="Login" />
            </Link>
            <Link href="/login" className="cursor-pointer">
              <Button text="SignUp" colorClass="bg-[#9747FF]" />
            </Link>
          </div>
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
};

export default Menu;
