import * as React from "react";

import { cn } from "~/lib/utils";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "normal" | "small";
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize = "normal", type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-sm border border-input bg-background px-4 text-p-ui transition-colors file:h-11 file:mr-3 file:px-4 file:border file:border-foreground file:bg-background file:text-body14-semibold file:text-foreground file:rounded-sm [&:is([type=file])]:border-0 [&:is([type=file])]:px-0 [&:is([type=file])]:rounded-none [&:is([type=file])]:text-body13 [&:is([type=file])]:text-neutral-700 placeholder:text-placeholder focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-a llowed disabled:border-neutral-300 disabled:bg-neutral-200 disabled:placeholder:text-neutral-400 aria-[invalid='true']:border-destructive aria-[invalid='true']:ring-destructive",
          inputSize === "normal"
            ? "h-11 text-body13 px-4"
            : "h-9 text-body14 px-3",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
