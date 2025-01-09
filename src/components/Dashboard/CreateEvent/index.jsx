"use client";

import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/components/Common/Button";
import createdEventsServices from "../../../app/pages/appwrite/eventServices";
// import {purchaseEvent} from "../../../app/redux/Slices/userEventSlice";
import { useDispatch } from "react-redux";
import PlanModal from "./PlanModal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";


const CreateEvent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDetails, setDialogDetails] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const plans = [
    { value: "Basic Plan", label: "Basic Plan", details: "Details about the Basic Plan." },
    { value: "Premium Plan", label: "Premium Plan", details: "Details about the Premium Plan." },
    { value: "Royal Plan", label: "Royal Plan", details: "Details about the Royal Plan." },
  ];

  const handleOpenDialog = (planType) => {
    setDialogDetails(planType);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogDetails("");
  };


  const dispatch = useDispatch();

  async function create(values) {
    try {
      alert("Event Created Successfully");
      const event = await createdEventsServices.createEvent({
        name: values.name,
        email: values.email,
        phone: values.phone,
     

        city: values.city,
        eventName: values.eventName,
        duration: values.duration,
        date: values.date,
        time: values.time,
        numOfAttendees: values.numOfAttendees,
        chosePlan: values.plan,
        moreInfo: values.moreInfo,
      });
      console.log("Event created:", event);
      // dispatch(purchaseEvent(event));
    } catch (error) {
      console.error("Error creating event:", error);
    }
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(40, "Name must be 40 characters or less"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    city: Yup.string().required("City is required"),
   phone: Yup.string()
         .required("Phone number is required")
         .test(
           "is-valid-phone",
           "Invalid phone number",
           (value) => value && isValidPhoneNumber(value)
         ),
    eventName: Yup.string()
      .required("Event name is required")
      .max(100, "Event name must be 100 characters or less"),
    duration: Yup.number()
      .required("Duration is required")
      .max(24, "Duration must be 24 hours or less")
      .min(1, "Duration must be 1 hour or more"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),

    numOfAttendees: Yup.number()
      .required("Attendance is required")
      .max(1000, "Number of attendees must be 1000 or less")
      .min(50, "Number of attendees must be 50 or more"),
    plan: Yup.string().required("Please select a plan"),
    moreInfo: Yup.string(),
  });

  return (
    <div className="pt-8 pr-12 pl-4  ">
      <Formik
        initialValues={{
          name: "",
          email: "",
          city: "",
          phone: "",
          eventName: "",
          duration: "",
          numOfAttendees: "",
          date: "",
          time: "",
          plan: "",
          moreInfo: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          create(values);
          console.log(values, "formdata");
          resetForm();
        }}
      >
        {({ handleSubmit, isValid, dirty, setFieldValue , values}) => (
          <div className="w-full  mx-auto flex flex-col text-center p-6 bg-[#E2D0FA] rounded-2xl">
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 items-center mt-4"
            >
              {/* User Information Section */}
              <h2 className="text-left font-bold w-full mb-2 text-2xl text-[#9747FF]">
                User Information
              </h2>
              <div className="grid grid-cols-2 gap-x-24 gap-y-4  w-full">
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "city", label: "City", type: "text" },
                  
                ].map((field) => (
                  <div key={field.name} className="w-full flex flex-col">
                    <label className="text-left mb-2 font-bold">
                      {field.label}
                    </label>
                    <Field name={field.name}>
                      {({ field }) => (
                        <input
                          {...field}
                          type={field.type}
                          className="p-3 w-full border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  
                ))}
                <div>
               <label className="text-left flex flex-start mb-2 font-bold">Phone</label>
              <Field name="phone">
                {({ field }) => (
                  <PhoneInput
                  style={{ width: '100%' }}
                  inputStyle={{
                    height: '55px',
                    width: '100%',
                  
                  }}
                 className="p-3 w-full border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                    {...field}

                    defaultCountry="US"
                    mask="999-999-9999"
                    placeholder="Enter phone number"
                    value={values.phone}
                    onChange={(value) => setFieldValue("phone", value)}
                   
                  />
                )}
              </Field>
              <ErrorMessage name="phone" component="div" className="text-red-600 mt-1" />
              </div>

              </div>

              {/* Event Information Section */}
              <h2 className="text-left font-bold w-full mt-4 mb-2 text-2xl text-[#9747FF]">
                Event Information
              </h2>
              <div className="grid grid-cols-2 gap-x-24 gap-y-4 w-full">
                {[
                  { name: "eventName", label: "Event Name", type: "text" },
                  { name: "duration", label: "Duration", type: "number" },
                  {
                    name: "numOfAttendees",
                    label: "Attendance",
                    type: "number",
                  },
                  { name: "date", label: "Date", type: "date" },
                  { name: "time", label: "Time", type: "time" },
                ].map((field) => (
                  <div key={field.name} className="w-full flex flex-col">
                    <label className="text-left mb-2 font-bold">
                      {field.label}
                    </label>
                    <Field name={field.name}>
                      {({ field: formikField }) => (
                        <input
                          {...formikField}
                          type={field.type} // Use field.type directly here
                          className="p-3 w-full border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                ))}

             
                 <div className="w-full flex flex-col">
                <label className="text-left mb-2 font-bold">Plan</label>
                <div className="relative">
                  {/* Selected plan display */}
                  <button
                    type="button"
                    className="p-3 border rounded-lg bg-white w-full text-left"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {selectedPlan ? selectedPlan.label : "Select a plan"}
                  </button>

                  {/* Dropdown options */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 border bg-white rounded-lg shadow-lg">
                      {plans.map((plan) => (
                        <div
                          key={plan.value}
                          className="p-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedPlan(plan); // Update selected plan
                            setFieldValue("plan", plan.value); // Update Formik field
                            setDropdownOpen(false); // Close dropdown
                          }}
                        >
                          <span>{plan.label}</span>
                          <button
                            type="button"
                            className="px-3 py-1 bg-[#9747FF] text-white rounded-lg"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent triggering the dropdown selection
                              handleOpenDialog(plan.value); // Open dialog with selected plan
                            }}
                          >
                            View Details
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <ErrorMessage name="plan" component="div" className="text-red-600 mt-1" />
              </div>
                <div className=" w-full  mt-4">
                  <label className="flex  mb-3   font-bold">
                    More Information
                  </label>
                  <Field
                    name="moreInfo"
                    as="textarea"
                    rows="4"
                    className="p-3 w-full border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                  />
                </div>

                
              </div>

              {/* More Information */}

              <Button
                type="submit"
                disabled={!(isValid && dirty)}
                className={`z-[3] mt-6 items-center bg-[#9747FF] font-semibold px-5 py-3 rounded-full text-white uppercase ${
                  !(isValid && dirty)
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                Submit
              </Button>
              <PlanModal
              isOpen={dialogOpen} onClose={handleCloseDialog} planType={dialogDetails} 
              />
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateEvent;
