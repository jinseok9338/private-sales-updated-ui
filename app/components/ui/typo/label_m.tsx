interface LabelMProps {
  children: string
  className?: string
}
export default function LabelM({ children, className }: LabelMProps) {
  return <p className={`${className} text-label-m`}>{children}</p>
}
