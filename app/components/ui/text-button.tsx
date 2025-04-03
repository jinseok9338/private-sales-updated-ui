import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap text-body13 transition-[color,box-shadow] disabled:pointer-events-none disabled:bg-neutral-400 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default: "text-primary",
        gray: "text-neutral-400",
      },
      state: {
        link: "underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function TextButton({
  className,
  variant,
  state,
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
      className={cn(buttonVariants({ variant, state, className }))}
      {...props}
    />
  );
}

export { TextButton, buttonVariants };
