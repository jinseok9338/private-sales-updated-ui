interface ParagraphSProps {
  children: string;
  className?: string;
}
export default function ParagraphXS({ children, className }: ParagraphSProps) {
  return <p className={`${className} text-paragraph-xs`}>{children}</p>;
}
