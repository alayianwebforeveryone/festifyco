"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from "./ContactForm";
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
      <div className="container  mx-auto  pt-24 ">
        <div>
          {/* Header Section */}
          <h1 className="text-center mx-auto  text-[#9747FF] text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold leading-tight sm:leading-[2.5rem] lg:leading-[3rem] my-10">
            Let’s Start a Conversation
          </h1>

          {/* Content Section */}
          <div className="flex flex-col sm:flex-row justify-between    items-center  p-4 rounded-md">
            {/* FAQ Section */}
            <div className=" sm:w-[40%]  flex flex-col   rounded-md sm:p-6">
              <h1 className="text- text-[1rem] sm:text-[2rem] font-extrabold text-[#9747FF] sm:mb-16">
                Frequently Asked Questions (FAQs)
              </h1>
              <div className="max-w-full w-[658px] mx-auto ">
                <Accordion type="single" collapsible className="space-y-6">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg sm:text-xl font-semibold bg-[#E2D0FA] px-2 sm:px-4  ">
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
            <div className=" = sm:w-[40%] rounded-md sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
