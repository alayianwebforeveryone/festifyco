import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import { cn } from "../../../lib/utils";
import { AppSidebar } from "../../../components/Dashboard/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../../../components/ui/sidebar"
import { DashboardHeader } from "../../../components/Dashboard/DashboardHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
      <div
        className={`${geistSans.variable} ${geistMono.variable} bg-[#EBE2F5] antialiased ${cn({ "debug-screens": process.env.NODE_ENV === "development" })}    bg]`}
      >
        <SidebarProvider
          style={{
            "--sidebar-width": "15rem",
            "--sidebar-width-mobile": "20rem",
          }}
        >
          <AppSidebar />
          <main className=" ml-8  w-[67%] lg:w-[75%]    xl:w-full ">
            <SidebarTrigger />
            <DashboardHeader />
            <div className="mt-72">
              {children}
            </div>

          </main>
        </SidebarProvider>

      </div>
  );
}
