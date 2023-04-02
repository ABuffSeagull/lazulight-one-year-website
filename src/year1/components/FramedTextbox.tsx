import Image from '../components/Image'
import './TalentLayout.scss'

// Instead of an interface, this way allows using default values and such
export default function FramedTextbox ({ children, corner, border, className = '' }: {
  children: React.ReactNode
  corner: string
  border: string
  className?: string
}): JSX.Element {
  return (
    <div className={`talent-text-container ${className}`}>
      <Image className='talent-corner' src={corner} />
      <div className={`talent-text-inner ${border}-border`}>
        {children}
      </div>
    </div>
  )
}
