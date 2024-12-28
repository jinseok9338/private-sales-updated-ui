interface ParagraphLProps {
  children: string
  className?: string
}
export default function ParagraphL({ children, className }: ParagraphLProps) {
  return <p className={`${className} text-paragraph-l`}>{children}</p>
}
