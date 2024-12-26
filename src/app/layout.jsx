import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased bg-[#EBE2F5]  overflow-x-hidden w-full `}>
        <Menu />

        {children}

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
