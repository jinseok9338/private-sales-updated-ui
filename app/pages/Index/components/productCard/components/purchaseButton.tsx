import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

interface PurchaseButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const PurchaseButton = ({
  disabled = false,
  children,
  className,
  onClick,
}: PurchaseButtonProps) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={cn(
        buttonVariants({
          variant: "default",
          size: "sm",
        }),
        // Add any additional styles specific to purchase button
        "w-full cursor-pointer select-none",
        disabled && "cursor-not-allowed bg-neutral-400",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PurchaseButton;
