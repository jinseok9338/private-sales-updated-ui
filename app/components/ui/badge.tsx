import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[2px]  min-w-[48px] px-2 h-[22px] text-detail-12 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-4 gap-1 [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow] has-[_svg:only-child]:px-1 has-[_svg:only-child]:min-w-[auto]",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-700 text-primary-foreground shadow-sm [a&]:hover:bg-primary/90",
        secondary: "bg-neutral-200 text-neutral-700 [a&]:hover:bg-secondary/90",
        destructive:
          "bg-red-200 text-red-500 shadow-sm [a&]:hover:bg-destructive/90",
        outline:
          "border border-input text-neutral-700 [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
