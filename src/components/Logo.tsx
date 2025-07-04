import { cn } from "@/lib/utils";
import type React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-8 w-auto fill-current text-white", className)}
      viewBox="0 0 75 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M37.59.25l36.95 64H.64l36.95-64z" />
    </svg>
  );
};

export default Logo;
