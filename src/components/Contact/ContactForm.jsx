"use client";

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Common/Button';
import Link from 'next/link';

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(40, 'Name must be 40 characters or less'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'
      )
      .required('Email is required'),
    subject: Yup.string()
      .required('Subject is required'),
    message: Yup.string()
      .required('Message is required')
      .max(500, 'Message must be 500 characters or less'),
  });

  return (
    <>
      <div className="pt-40">
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            // Handle form submission
            console.log( values,'values')
            console.log(values, 'form values');
            resetForm();
          }}
        >
          {({ handleSubmit, isValid, dirty }) => (
            <div className="max-w-sm sm:max-w-md lg:max-w-lg border-4 mx-auto flex flex-col text-center py-10 bg-white border-[#9747FF] rounded-2xl">
              <h1 className="font-bold text-[1.5rem] sm:text-[2rem] leading-[2rem] sm:leading-[2.4375rem] text-[#9747FF]">SignUp</h1>

              <Form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 sm:p-6 rounded-lg items-center mx-auto mt-4">
                {/* Name Field */}
                
                <div className="flex w-full flex-col mb-4">
              
                  <label className="text-[1rem] sm:text-[1.25rem] leading-[1.25rem] sm:leading-[1.5rem] text-left mb-2 font-bold">
                    Name
                  </label>
                  <Field name="name">
                    {({ field }) => (
                      <input
                        {...field}
                        type="text"
                        required
                        className="p-3 w-full sm:w-[10rem] md:w-[17rem] lg:w-[17.875rem] border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="name" component="div" className="text-red-600" />
                </div>

                {/* Email Field */}
                <div className="flex w-full flex-col mb-4">
                  <label className="text-[1rem] sm:text-[1.25rem] leading-[1.25rem] sm:leading-[1.5rem] text-left mb-2 font-bold">
                    Email
                  </label>
                  <Field name="email">
                    {({ field }) => (
                      <input
                        {...field}
                        type="email"
                        required
                        className="p-3 w-full sm:w-[10rem] md:w-[17rem] lg:w-[17.875rem] border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="email" component="div" className="text-red-600" />
                </div>

                {/* Subject Field */}
                <div className="flex w-full flex-col mb-4">
                  <label className="text-[1rem] sm:text-[1.25rem]  leading-[1.25rem] sm:leading-[1.5rem] text-left mb-2 font-bold">
                    Subject
                  </label>
                  <Field name="subject">
                    {({ field }) => (
                      <input
                        {...field}
                        type="text"
                        required
                        className="p-3 w-full sm:w-[10rem] md:w-[17rem]  lg:w-[17.875rem] border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="subject" component="div" className="text-red-600" />
                </div>

                {/* Message Field */}
                <div className="flex w-full flex-col mb-4">
                  <label className="text-[1rem] sm:text-[1.25rem] md:w-[17rem] leading-[1.25rem] sm:leading-[1.5rem] text-left mb-2 font-bold">
                    Message
                  </label>
                  <Field name="message">
                    {({ field }) => (
                      <textarea
                        {...field}
                        required
                        rows={4}
                        className="p-3 w-full sm:w-[10rem] md:w-[17rem]  lg:w-[17.875rem] border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="message" component="div" className="text-red-600" />
                </div>

                {/* Submit Button */}
                <Link href="/">
                  <Button
                    type="submit"
                    disabled={!(isValid && dirty)}
                    className={`z-[3] mt-6 items-center bg-[#9747FF] font-semibold text-center px-5 sm:px-10 justify-center overflow-hidden relative text-[#FFFFFF] uppercase py-3 md:py-4 rounded-full mx-auto ${!(isValid && dirty) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                      }`}
                  >
                    SignUp
                  </Button>
                </Link>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
