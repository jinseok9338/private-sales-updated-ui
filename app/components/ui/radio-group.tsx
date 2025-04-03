"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "~/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-2.5", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  size = "normal",
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  size?: "normal" | "large";
}) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input bg-white text-primary ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:bg-neutral-200 aria-invalid:focus-visible:ring-0 [&:disabled_svg]:fill-neutral-400 [&:disabled_svg]:stroke-neutral-400 [&:disabled+label]:text-neutral-400 [&[aria-checked='true']+label]:font-semibold",
        size === "large" && "size-5 [&_svg]:size-2.5",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
