import * as React from "react";

import { cn } from "~/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      aria-invalid="false"
      className={cn(
        "border-input placeholder:text-placeholder ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-[invalid='true']:border-destructive aria-[invalid='true']:focus-visible:ring-destructive aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/50 flex field-sizing-content min-h-[88px] w-full rounded-sm border bg-background p-3 text-body14 shadow-xs resize-none transition-[color,box-shadow] focus-visible:ring-ring focus-visible:ring-1 focus-visible:1 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-disabled disabled:placeholder:text-neutral-400 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none dark:aria-invalid:focus-visible:ring-4",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
