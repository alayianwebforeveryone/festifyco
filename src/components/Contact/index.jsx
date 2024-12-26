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
      question: "What is shadcn/ui?",
      answer:
        "shadcn/ui is a collection of accessible and customizable components for React, built using Tailwind CSS.",
    },
    {
      question: "How do I install shadcn/ui?",
      answer:
        "You can install it via npm or yarn. Run `npm install @shadcn/ui` to add it to your project.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes! The components are fully customizable and work seamlessly with Tailwind CSS.",
    },
  ];

  return (
    <>
      <div className="container mx-auto h-screen p-4 ">
        {/* Header Section */}
        <h1 className="text-center mx-auto pt-80 text-[#9747FF] text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold leading-tight sm:leading-[2.5rem] lg:leading-[3rem] my-10">
          Let’s Start a Conversation
        </h1>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 rounded-md">
          {/* FAQ Section */}
          <div className="  flex flex-col justify-center items-center rounded-md p-6">
            <h1 className="text-center text-[1rem] sm:text-[1.25rem] font-extrabold text-[#9747FF] mb-4">
              Frequently Asked Questions (FAQs)
            </h1>
            <div className="max-w-full w-[658px] mx-auto ">
             
              <Accordion type="single" collapsible className="space-y-6">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg sm:text-xl font-semibold bg-[#E2D0FA]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base sm:text-lg text-gray-600 bg-[#E2D0FA]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className=" rounded-md p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
