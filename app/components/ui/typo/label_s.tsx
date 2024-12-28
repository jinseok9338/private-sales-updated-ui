interface LabelSProps {
  children: string | number
  className?: string
}
export default function LabelS({ children, className }: LabelSProps) {
  return <p className={`${className} text-label-s`}>{children}</p>
}
