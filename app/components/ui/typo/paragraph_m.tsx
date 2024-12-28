import { ReactNode } from 'react'

interface ParagraphMProps {
  children: ReactNode
  className?: string
}
export default function ParagraphM({ children, className }: ParagraphMProps) {
  return <p className={`${className} text-paragraph-m`}>{children}</p>
}
