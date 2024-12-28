"use client";
import React from "react";
import Button from "../../../../components/Common/Button";
import { logout } from "@/app/redux /Slices/authSlice";
import { useRouter } from "next/navigation";
import authService from "../../../../appwrite/auth";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import Link from "next/link";

const LogoutPage = ({type}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        toast("You have been logged out successfully");
        dispatch(logout());
        router.push("/");
        console.log("Logout successfully");
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };

  return (
    <>
      <div className={`pt-40 `}  >
        <div className="border-2 rounded-[20px] bg-white   mx-auto  p-8   border-[#9747FF]">
          <p className="text-center text-2xl font-bold text-[#9747FF]">
            Are you sure you want to Log out{" "}
          </p>
          <div className="flex justify-center px-4 gap-40 my-12   ">
            <Link href="/ ">
              <Button className="border-2 rounded-lg text-center   py-1 hover:text-white hover:bg-[#9747FF] border-[#9747FF] text-[#9747FF]">
                No
              </Button>
            </Link>
            <Button
              onClick={logoutHandler}
              className="border-2 rounded-lg text-center  py-1 hover:text-white  hover:bg-[#9747FF] border-[#9747FF] text-[#9747FF]"
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutPage;
