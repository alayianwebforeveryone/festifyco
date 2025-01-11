import React from "react";

import ServicesCarousel from "./ServicesCarousel";
import Plan from "./Plan";
import Heading from "../Common/Heading";

const Services = () => {
  return (
    <>
      <div className="px-24">
        <Heading title = "Services" />
      </div>
      <ServicesCarousel />
      <h2 className="text-center  mt-24 text-[32px] font-extrabold text-[#A749FF] ">Our Plan</h2>
      <Plan />
    </>
  );
};

export default Services;
