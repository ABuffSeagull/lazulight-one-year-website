export default function ExLink ({
  href,
  children,
  className,
  style
}: {
  href: string
  children: React.ReactNode
  className?: string | undefined
  style?: React.CSSProperties | undefined
}): JSX.Element {
  return (
    <a href={href} className={className} style={style} target='_blank' rel='noopener noreferrer'>{children}</a>
  )
}
