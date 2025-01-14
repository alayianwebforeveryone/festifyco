"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import ContactForm from "./ContactForm";
import Heading from "../Common/Heading";
const Contact = () => {
  const faqItems = [
    {
      question: "What features does your event management system offer?",
      answer:
        "Key features include event scheduling, budget tracking, online registration, ticketing, attendee management, vendor coordination, and real-time reporting.",
    },
    {
      question: "Does the system support online ticket sales?",
      answer:
        "Yes, our system integrates with secure payment gateways for seamless ticket sales and provides detailed ticketing analytics.",
    },
    {
      question: "Can I customize the system to fit my event needs?",
      answer:
        "Absolutely! Our platform is flexible and allows customization of forms, themes, ticketing options, and more.",
    },
    {
      question: "Does it include a mobile app?",
      answer:
        "Yes, we offer a mobile-friendly interface, and our app (if applicable) allows users to manage events on the go.",
    },
  ];

  return (
    <>
      <div className="max-w-full  mx-auto  pt-24 ">
        <div>
          {/* Header Section */}
          <div className="px-4 sm:px-24 ">
            <Heading title="Lets Start Conversation" />
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-between  2xl:gap-48   items-center md:px-12   xl:px-24 rounded-md">
            {/* FAQ Section */}
            <div className=" sm:w-[80%] w-[90%] md:w-[40%] lg:w-[50%]  flex flex-col   rounded-md p-6 md:p-2">
              <h1 className="text-center text-[1.57rem] sm:text-[2rem] md:text-[1.57rem] font-extrabold text-[#9747FF] mb-16">
                Frequently Asked Questions (FAQs)
              </h1>
              <div className="max-w-full w-[658px] mx-auto ">
                <Accordion type="single" collapsible className="space-y-6">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg sm:text-xl md:text-base font-semibold bg-[#E2D0FA] px-2 sm:px-4  ">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base sm:text-lg text-gray-600 bg-[#E2D0FA] px-2 sm:px-4 ">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className=" = sm:w-[80%] w-[80%] md:w-[60%] lg:w-[50%] md:mt-24  rounded-md sm:pl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
