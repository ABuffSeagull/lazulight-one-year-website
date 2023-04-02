import Image from '../components/Image'
import './TalentLayout.scss'

interface Props {
  corner: string
  border: string
  children: React.ReactNode
  className?: string
}

export default function FramedTextbox (props: Props): JSX.Element {
  return (
    <div className={`talent-text-container ${props.className}`}>
      <Image className='talent-corner' src={props.corner} />
      <div className={`talent-text-inner ${props.border}-border`}>
        {props.children}
      </div>
    </div>
  )
}