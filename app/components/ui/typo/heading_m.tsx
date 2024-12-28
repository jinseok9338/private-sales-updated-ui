import type { ReactNode } from "react";

interface HeadingMProps {
  children: ReactNode;
  className?: string;
}
export default function HeadingM({ children, className }: HeadingMProps) {
  return <p className={`${className} text-heading-m`}>{children}</p>;
}
