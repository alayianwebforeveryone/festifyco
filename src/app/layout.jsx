"use client";
import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#EBE2F5] overflow-x-hidden w-full`}>
        <Provider store={store}>
          <Menu />
          <div className=" ">{children}</div>
          <Toaster />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
