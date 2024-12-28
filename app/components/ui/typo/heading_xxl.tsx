import { ReactNode } from 'react'

interface HeadingXxlProps {
  children: ReactNode
  className?: string
}
export default function HeadingXxl({ children, className }: HeadingXxlProps) {
  return <p className={`${className} text-heading-xxl`}>{children}</p>
}
