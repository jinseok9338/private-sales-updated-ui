interface HeadingXlProps {
  children: string
  className?: string
}
export default function HeadingXl({ children, className }: HeadingXlProps) {
  return <p className={`${className} text-heading-xl`}>{children}</p>
}
