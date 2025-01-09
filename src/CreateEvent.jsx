"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const CreateEvent = () => {
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Phone number is required")
      .test(
        "is-valid-phone",
        "Invalid phone number",
        (value) => value && isValidPhoneNumber(value)
      ),
  });

  return (
    <div className="pt-8 pr-12 pl-4">
      <Formik
        initialValues={{ phone: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("Submitted: " + JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Phone Field with Country Code and Flag */}
            <div className="w-full flex flex-col">
              <label className="text-left mb-2 font-bold">Phone</label>
              <Field name="phone">
                {({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="Pakistan"
                    placeholder="Enter phone number"
                    value={values.phone}
                    onChange={(value) => setFieldValue("phone", value)}
                    className="p-3 border rounded-lg bg-white focus:outline-none w-full"
                  />
                )}
              </Field>
              <ErrorMessage name="phone" component="div" className="text-red-600 mt-1" />
            </div>

            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white px-5 py-3 rounded-full"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEvent;
