import { cn } from "~/lib/utils";

function Spinner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-spinner-spin rounded-full size-8 border-[3px] border-transparent border-t-common-black",
        className
      )}
      {...props}
    />
  );
}

export { Spinner };
