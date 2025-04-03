import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-body14-semibold transition-[color,box-shadow] disabled:pointer-events-none disabled:bg-neutral-400 [&_svg]:pointer-events-none [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-neutral-700 focus:bg-neutral-700 active:bg-neutral-600",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-red-300 focus:hover:bg-red-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-neutral-100 focus:bg-neutral-100 active:bg-neutral-100 active:border-neutral-200 active:text-neutral-600 border-secondary-foreground border disabled:bg-secondary disabled:border-disabled disabled:text-neutral-400",
        outline:
          "bg-background border border-input text-common-black hover:bg-neutral-100 focus:bg-neutral-100 active:bg-neutral-100 active:border-border active:text-neutral-600 disabled:bg-white disabled:border-border disabled:text-neutral-400",
        ghost:
          "text-primary hover:bg-neutral-100 focus:neutral-100 active:text-neutral-600 active:bg-neutral-100 disabled:bg-white disabled:text-neutral-400",
        // link: "text-primary underline-offset-4 hover:underline", //미작업
      },
      size: {
        default:
          "h-11 min-w-[76px] px-4 py-[11px] has-[>svg]:min-w-[inherit] has-[>svg]:p-2.5 [&_svg]:size-6",
        sm: "h-9 min-w-[64px] px-3 py-2 text-body13-semibold has-[>svg]:min-w-[inherit] has-[>svg]:p-2.5 [&_svg]:size-4",
        xs: "h-7 min-w-[56px] px-3 py-1 text-detail-12-medium rounded-[2px]",
        // lg: "h-10 rounded-md px-6 has-[>svg]:px-4", //미작업
        icon: "size-11 p-2.5 [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
