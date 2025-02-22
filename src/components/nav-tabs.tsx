"use client";

import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  sidebarMenuButtonVariants,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavTabs({
  projects,
}: {
  projects: {
    title: string;
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  // const { isMobile } = useSidebar();
  const pathName = usePathname();

  return (
    <SidebarGroup className="">
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            {/* <SidebarMenuButton tooltip={item.title}>
            </SidebarMenuButton> */}
            <Link
              href={item.url}
              className={cn(
                sidebarMenuButtonVariants(),
                "hover:bg-primary hover:text-white",
                {
                  "bg-primary text-white": item.url === pathName,
                }
              )}
            >
              <item.icon />
              <span>{item.name}</span>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
