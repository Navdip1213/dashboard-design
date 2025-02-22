"use client";

import * as React from "react";
import { Bell, Frame, Home, Map, PieChart, Settings } from "lucide-react";

import { NavTabs } from "@/components/nav-tabs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  sidebarMenuButtonVariants,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  tabs: [
    {
      title: "Home",
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Blogs",
      name: "Blogs",
      url: "/blogs",
      icon: Frame,
    },
    {
      title: "Categories",
      name: "Categories",
      url: "/categories",
      icon: PieChart,
    },
    {
      title: "Testimonials",
      name: "Testimonials",
      url: "/testimonials",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent w-full data-[state=open]:text-sidebar-accent-foreground"
            >
              <Link
                href={"/"}
                className="font-bold text-lg w-full md:text-4xl text-center md:py-6"
              >
                LOGO
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavTabs projects={data.tabs} />
      </SidebarContent>
      <SidebarFooter>
        <button className={cn(sidebarMenuButtonVariants(), "md:hidden")}>
          <Bell /> Notification
        </button>
        <button className={cn(sidebarMenuButtonVariants())}>
          <Settings /> Settings
        </button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
