"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import CheckIcon from "~/components/icons/check-icon";
import CheckMinusIcon from "~/components/icons/check-minus-icon";

import { cn } from "~/lib/utils";

function Checkbox({
  className,
  checked,
  size = "normal",
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  size?: "normal" | "large";
}) {
  const renderIcon = () => {
    if (checked === "indeterminate") {
      return (
        <CheckMinusIcon
          className={`stroke-background ${
            size === "large" ? "size-4" : "size-3"
          }`}
        />
      );
    }
    return (
      <CheckIcon
        className={`stroke-background ${
          size === "large" ? "size-4" : "size-3"
        }`}
      />
    );
  };

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      checked={checked}
      className={cn(
        "peer border-input bg-white data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:border-primary disabled:bg-disabled data-[state=checked]:disabled:bg-disabled data-[state=indeterminate]:disabled:bg-disabled data-[state=indeterminate]:disabled:border-input data-[state=checked]:disabled:border-input ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 shrink-0 rounded-[2px] border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed aria-invalid:focus-visible:ring-0 [&:disabled_svg]:stroke-neutral-400",
        size === "large" ? "size-5" : "size-4",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        {renderIcon()}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
