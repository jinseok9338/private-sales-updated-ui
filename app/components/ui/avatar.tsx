"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const avatarVariants = cva(
  "relative flex items-center justify-center overflow-hidden rounded-full bg-border",
  {
    variants: {
      variant: {
        default: "",
        border: "border border-input",
      },
      size: {
        default: "text-p-ui-semibold size-8 [&>svg]:size-6",
        sm: "text-subtle-semibold size-6 [&>svg]:size-4",
        lg: "text-large size-10 [&>svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Avatar({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
