
"use client";

import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Common/Button';
import Link from 'next/link';
const SignUp = () => {
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
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .required('Password is required'),

  });
  return (
    <>
      <div className='pt-40'>
        <Formik
          initialValues={{

            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            // Handle form submission
            console.log(values, 'form values');
            resetForm();
          }}
        >
          {({ handleSubmit, isValid, dirty }) => (

            <div className=" max-w-sm sm:max-w-md lg:max-w-lg border-4 mx-auto flex flex-col text-center py-10 bg-white border-[#9747FF] rounded-2xl">
              <h1 className="font-bold text-[1.5rem] sm:text-[2rem] leading-[2rem] sm:leading-[2.4375rem] text-[#9747FF]">Login</h1>

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
                        className="p-3 w-full sm:w-[20rem] lg:w-[26.875rem] border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
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
                        className="p-3 w-full sm:w-[20rem] lg:w-[26.875rem] border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="email" component="div" className="text-red-600" />
                </div>

                {/* Password Field */}
                <div className="flex w-full flex-col mb-4">
                  <label className="text-[1rem] sm:text-[1.25rem] leading-[1.25rem] sm:leading-[1.5rem] text-left mb-2 font-bold">
                    Password
                  </label>
                  <Field name="password">
                    {({ field }) => (
                      <input
                        {...field}
                        type="password"
                        required
                        className="p-3 w-full sm:w-[20rem] lg:w-[26.875rem] border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="password" component="div" className="text-red-600" />
                </div>

                {/* Submit Button */}
                <Link href="/">
                  <Button
                    type="submit"
                    disabled={!(isValid && dirty)}
                    text="Login"
                    colorClass={`z-[3] mt-6 items-center bg-[#9747FF] font-semibold text-center px-5 sm:px-10 justify-center overflow-hidden relative text-[#FFFFFF] uppercase py-3 md:py-4 rounded-full mx-auto ${!(isValid && dirty) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                      }`}
                  />
                </Link>
              </Form>
            </div>

          )}
        </Formik>
      </div>



    </>
  )
}

export default SignUp