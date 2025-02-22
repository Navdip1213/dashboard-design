import React from "react";
import { UserInfo } from "./user-info";
import SearchBox from "./common/SearchBox";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <header className="flex py-3 shrink-0 items-center gap-2 transition-[width,height] border-b ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:py-2">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex w-full items-center md:justify-between justify-end">
          <SearchBox containerClassName="hidden md:flex" />
          <div className="flex items-center justify-end gap-2">
            <Button
              variant={"outline"}
              size={"icon"}
              className=" rounded-full hidden md:flex"
            >
              <Bell />
            </Button>
            <Separator
              orientation="vertical"
              className="bg-slate-300 h-6 hidden md:flex"
            />
            <UserInfo
              user={{
                name: "Admin",
                email: "admin@example.com",
                avatar: "/avatars/shadcn.jpg",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
