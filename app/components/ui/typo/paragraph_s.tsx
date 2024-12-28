import type { ReactNode } from "react";

interface ParagraphSProps {
  children: ReactNode;
  className?: string;
}
export default function ParagraphS({ children, className }: ParagraphSProps) {
  return <p className={`${className} text-paragraph-s`}>{children}</p>;
}
