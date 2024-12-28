interface LabelSProps {
  children: string
  className?: string
  style?: React.CSSProperties
}
export default function LabelXS({ children, className, style }: LabelSProps) {
  return (
    <p style={style} className={`${className} text-label-xs`}>
      {children}
    </p>
  )
}
