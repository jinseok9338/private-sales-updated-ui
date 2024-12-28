interface HeadingLProps {
  children: string
  className?: string
}
export default function HeadingL({ children, className }: HeadingLProps) {
  return <p className={`${className} text-heading-l`}>{children}</p>
}
