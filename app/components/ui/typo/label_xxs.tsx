interface LabelSProps {
  children: string
  className?: string
}
export default function LabelXXS({ children, className }: LabelSProps) {
  return <p className={`${className} text-label-xxs`}>{children}</p>
}
