"use client";
import logoutAuth from "../../../../hooks/logoutAuth";
import Logout from "../../../../components/Logout";
import React from "react";


const LogoutPage = () => {
 logoutAuth()

 

  return (
    <>
      <div >
         <Logout type= "dashboard"/>
      </div>
    </>
  );
};

export default LogoutPage;
