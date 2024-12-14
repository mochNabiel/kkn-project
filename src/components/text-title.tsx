import React from "react";
import { cn } from "@/lib/utils";
import { ContainerWithChildren } from "postcss/lib/container";

const TextTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cn("font-extrabold text-2xl", className)}>
      <span className="relative">
        {children}
        <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-self-blue to-self-green opacity-40 transform -translate-y-1/2"></div>
      </span>
    </h1>
  );
};

export default TextTitle;
