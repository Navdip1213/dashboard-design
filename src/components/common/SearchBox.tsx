import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

type SearchBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
};

const SearchBox = ({
  containerClassName,
  placeholder = "Search",
  ...props
}: SearchBoxProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-1 rounded-full border border-secondary_border bg-white px-4",
        containerClassName
      )}
    >
      <Input
        className="w-full h-auto border-0 bg-transparent p-0 "
        placeholder={placeholder}
        {...props}
      />
      <Button variant={"ghost"} className="p-0">
        <Search className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SearchBox;
