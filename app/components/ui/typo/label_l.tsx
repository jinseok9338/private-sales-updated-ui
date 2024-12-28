import type { ReactNode } from "react";

interface LabelLProps {
  children: ReactNode;
  className?: string;
}
export default function LabelL({ children, className }: LabelLProps) {
  return <p className={`${className} text-label-l`}>{children}</p>;
}
