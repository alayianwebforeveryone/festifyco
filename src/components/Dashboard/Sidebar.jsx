"use client";
import * as React from "react";
import createEvents from "../../../Assets/icons/create-events.svg";
import Logout from "../../../Assets/icons/Logout.svg";
import registeredEvents from "../../../Assets/icons/registered-events.svg";
import viewEvents from "../../../Assets/icons/view-events.svg";
import dashboardIcon from "../../../Assets/icons/dashboard.svg";
import logo from "../../../Assets/Images/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarRail,
  SidebarProvider,
  SidebarGroupContent,
  SidebarGroup, // Import SidebarProvider
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// This is sample data.
const items = [
  {
    title: "View Events",
    url: "/pages/dashboard/view_events",
    icon: viewEvents,
    isActive: true,
  },
  {
    title: "Create Events",
    url: "/pages/dashboard/create_events",
    icon: createEvents,
  },
  {
    title: "Purchased Events",
    url: "/pages/dashboard/purchased_events",
    icon: registeredEvents,
  },
  {
    title: "Logout",
    url: "/pages/dashboard/logout",
    icon: Logout,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="   ">
      <SidebarHeader className= "bg-[#C7B1E2]">
        <Link href="/">
          <div className=" xl:mt-24 mt-8 px-2   xl:pl-8">
            <Image src={logo} alt="festifyco" />
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className=" bg-[#C7B1E2] ">
        <SidebarGroup className=" xl:pl-6 pr-0  pl-2 ">
          <SidebarGroupLabel className="p-0 mt-24   ">
            <Link
              className="flex w-full  gap-4   rounded-lg text-sm  xl:text-xl font-bold   xl:font-extrabold    items-center px-3  text-white py-5 bg-[#60B0F4] "
              href="/pages/dashboard"
            >
              <Image
                src={dashboardIcon}
                alt="dashboard"
                width={20}
                height={20}
              />
              <h2>User Dashboard</h2>
            </Link>
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-20">
            <SidebarMenu className="flex flex-cols gap-2  xl:gap-12  ">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`py-8 rounded-l-full pl-3 hover:bg-[#9747FF]

                  ${
                    pathname === item.url
                      ? "bg-[#9747FF] text-white"
                      : "hover:bg-[#9747FF]  hover:text-white text-black"
                  }
                   `}
                    asChild
                  >
                    <Link href={item.url}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      <span className="xl:text-lg  text-sm  font-bold  text-black  ">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
