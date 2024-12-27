import React from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";

const FeedbackLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ children, className, ...props }, ref) => {
  return (
    <Link ref={ref} className={cn(className, "active:bg-gray-200")} {...props}>
      {children}
    </Link>
  );
});

export default FeedbackLink;
