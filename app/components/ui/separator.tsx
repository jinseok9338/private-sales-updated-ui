"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "~/lib/utils";

interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  height?: string | number;
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  height = "1px",
  ...props
}: SeparatorProps) {
  const heightStyle = typeof height === "number" ? `${height}px` : height;

  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        orientation === "horizontal" ? `h-[${heightStyle}] w-full` : "",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
