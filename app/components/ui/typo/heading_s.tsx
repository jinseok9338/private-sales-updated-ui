interface HeadingSProps {
  children: string
  className?: string
}
export default function HeadingS({ children, className }: HeadingSProps) {
  return <p className={`${className} text-heading-s`}>{children}</p>
}
