"use client";

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/components/Common/Button";
import SinglePlanCard from "./SinglePlanCard";




const CreateEventForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDetails, setDialogDetails] = useState("");

  const plans = [
    { value: "Basic Plan", label: "Basic Plan", details: "Details about the Basic Plan." },
    { value: "Premium Plan", label: "Premium Plan", details: "Details about the Premium Plan." },
    { value: "Exclusive Plan", label: "Exclusive Plan", details: "Details about the Royal Plan." },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").max(40, "Name must be 40 characters or less"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    event: Yup.string().required("Event name is required").max(100, "Event name must be 100 characters or less"),
    duration: Yup.string().required("Duration is required"),
    date: Yup.date().required("Date is required").typeError("Invalid date format"),
    attendance: Yup.string().required("Attendance is required"),
    plan: Yup.string().required("Please select a plan"),
    moreInfo: Yup.string(),
  });

  const handleOpenDialog = (planType) => {
    setDialogDetails(planType);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogDetails("");
  };

  return (
    <div className="py-40">
      <Formik
        initialValues={{
          name: "",
          email: "",
          city: "",
          phone: "",
          event: "",
          duration: "",
          date: "",
          attendance: "",
          plan: "",
          moreInfo: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values, "formdata");
          resetForm();
        }}
      >
        {({ handleSubmit, isValid, dirty, setFieldValue }) => (
          <div className="w-[80%] mx-auto flex flex-col text-center p-6 bg-[#E2D0FA] rounded-2xl">
            <Form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center mt-4">
              {/* User Information Section */}
              <h2 className="text-left font-bold w-full mb-2 text-2xl text-[#9747FF]">
                User Information
              </h2>
              <div className="grid grid-cols-2 gap-4 w-full">
                {[{ name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "city", label: "City", type: "text" },
                  { name: "phone", label: "Phone", type: "text" },
                ].map((field) => (
                  <div key={field.name} className="w-full flex flex-col">
                    <label className="text-left mb-2 font-bold">{field.label}</label>
                    <Field name={field.name}>
                      {({ field }) => (
                        <input
                          {...field}
                          type={field.type}
                          className="p-3 w-full border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                        />
                      )}
                    </Field>
                    <ErrorMessage name={field.name} component="div" className="text-red-600" />
                  </div>
                ))}
              </div>

              {/* Event Information Section */}
              <h2 className="text-left font-bold w-full mt-4 mb-2 text-2xl text-[#9747FF]">
                Event Information
              </h2>
              <div className="grid grid-cols-2 gap-4 w-full">
                {[{ name: "event", label: "Event Name", type: "text" },
                  { name: "duration", label: "Duration", type: "text" },
                  { name: "attendance", label: "Attendance", type: "number" },
                  { name: "date", label: "Date", type: "date" },
                ].map((field) => (
                  <div key={field.name} className="w-full flex flex-col">
                    <label className="text-left mb-2 font-bold">{field.label}</label>
                    <Field name={field.name}>
                      {({ field }) => (
                        <input
                          {...field}
                          type={field.type}
                          className="p-3 w-full border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                        />
                      )}
                    </Field>
                    <ErrorMessage name={field.name} component="div" className="text-red-600" />
                  </div>
                ))}
              </div>

              {/* Plan Section */}
              <h2 className="text-left font-bold w-full mt-4 mb-2 text-2xl text-[#9747FF]">
                Choose a Plan
              </h2>
              <div className="w-full flex flex-col">
                <label className="text-left mb-2 font-bold">Plan</label>
                <Field name="plan">
                  {({ field }) => (
                    <select
                      {...field}
                      className="p-3 border rounded-lg bg-[#E7EEF0] w-full"
                      onChange={(e) => {
                        const selectedPlan = plans.find((plan) => plan.value === e.target.value);
                        setFieldValue("plan", e.target.value);
                        if (selectedPlan) {
                          handleOpenDialog(selectedPlan.value);
                        }
                      }}
                    >
                      <option value="" label="Select a plan" />
                      {plans.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
                <ErrorMessage name="plan" component="div" className="text-red-600 mt-1" />
              </div>

              {/* More Information */}
              <div className="w-full mt-4">
                <label className="text-left mb-2 font-bold">More Information</label>
                <Field
                  name="moreInfo"
                  as="textarea"
                  rows="4"
                  className="p-3 w-full border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                />
              </div>

              <Button
                type="submit"
                disabled={!(isValid && dirty)}
                className={`z-[3] mt-6 items-center bg-[#9747FF] font-semibold px-5 py-3 rounded-full text-white uppercase ${
                  !(isValid && dirty) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>

      {/* Plan Details Dialog */}
      
      <SinglePlanCard isOpen={dialogOpen} onClose={handleCloseDialog} planType={dialogDetails} />
    </div>
  );
};

export default CreateEventForm;
