import type { ReactNode } from "react";

interface HeadingXsProps {
  children: ReactNode;
  className?: string;
}
export default function HeadingXs({ children, className }: HeadingXsProps) {
  return <p className={`${className} text-heading-xs`}>{children}</p>;
}
