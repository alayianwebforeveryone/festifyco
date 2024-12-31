"use client";

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Common/Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login as authLogin } from "@/app/redux/Slices/authSlice";
import authService from "@/app/pages/appwrite/auth";
import { toast } from "sonner";
const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      console.log("session", session);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log("userData outer", userData);
        if (userData) dispatch(authLogin(userData));
        toast("You have been logged in  successfully");
        router.push("/");
      }
    } catch (error) {
      console.log("error params is going at catch side", error);
      setError(error.message);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
  });
  return (
    <>
      <div className="pt-40">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            login(values);
            resetForm();
          }}
        >
          {({ handleSubmit, isValid, dirty }) => (
            <div className="max-w-sm sm:max-w-md lg:max-w-lg border-4 mx-auto flex flex-col text-center py-10 px-4 sm:px-6 bg-white border-[#9747FF] rounded-2xl">
              <h1 className="font-bold text-[1.5rem] sm:text-[2rem] leading-[1.875rem] sm:leading-[2.4375rem] text-[#9747FF]">
                Login
              </h1>
              {error && <p className="text-red-600">{error}</p>}
              <Form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-4 sm:p-6 rounded-lg   mt-4"
              >
                {/* Email Field */}
                <div className="flex w-full flex-col mb-4">
                  <label
                    htmlFor="email"
                    className="text-[1rem] sm:text-[1.25rem] leading-[1.25rem] sm:leading-[1.5rem] text-left mb-2 font-bold"
                  >
                    Email
                  </label>
                  <Field name="email">
                    {({ field }) => (
                      <input
                        {...field}
                        type="email"
                        required
                        className="p-3 w-full border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                {/* Password Field */}
                <div className="flex w-full flex-col mb-4">
                  <label
                    htmlFor="password"
                    className="text-[1rem] sm:text-[1.25rem] leading-[1.25rem] sm:leading-[1.5rem] text-left mb-2 font-bold"
                  >
                    Password
                  </label>
                  <Field name="password">
                    {({ field }) => (
                      <input
                        {...field}
                        type="password"
                        required
                        className="p-3 w-full border rounded-lg bg-[#E7EEF0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#9747FF]"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!(isValid && dirty)}
                  className={`z-[3] mt-6 items-center bg-[#9747FF] font-semibold text-center px-5 sm:px-10 justify-center overflow-hidden relative text-[#FFFFFF] uppercase py-3 sm:py-4 rounded-full mx-auto ${
                    !(isValid && dirty)
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  Login
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
