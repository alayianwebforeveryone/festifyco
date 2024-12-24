
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import './globals.css';
function RootLayout ({children}) {
  return (

  <html lang="en">
 
  <body  className={` antialiased bg-[#EBE2F5]  overflow-x-hidden w-full `}>
    <Menu />
    {/* <main className=' pt-32'>{children}</main> */}
   {/* <Login/> */}
    {children}
    <Footer />

  </body>
  </html>
  );
}

export default RootLayout
