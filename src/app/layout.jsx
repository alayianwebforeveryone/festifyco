"use client"
import React from "react";
import { Provider } from "react-redux";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import{ store } from "./redux /store/store"; // Import the Redux store
import "./globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#EBE2F5] overflow-x-hidden w-full`}>
        <Provider store={store}>
          <Menu />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
