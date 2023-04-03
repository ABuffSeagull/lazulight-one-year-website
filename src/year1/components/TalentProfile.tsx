import Image from '../components/Image'
import FramedTextbox from './FramedTextbox'
import RowOfGifs from './RowOfGifs'
import './TalentLayout.scss'

export default function TalentProfile ({ name, portrait, animation, frame, youtube, twitter, discord, quote, children }: {
  name: string
  portrait: string | metadata[]
  animation: string
  frame: string
  youtube: string
  twitter: string
  discord: string
  quote: string
  children: React.ReactNode
}): JSX.Element {
  const firstName = name.split(' ')[0]
  const firstNameLower = firstName.toLowerCase()

  return (
    <div className='talent-profile-container'>
      <div className='talent-picture-box'>
        <div className='talent-picture-box-liver'><Image src={portrait} enableZoom /></div>
        {/* (Brandon): Number of images is hardcoded into 'talent-picture-box' */}
        <div className='talent-picture-box-mascot'><Image src={animation} enableZoom /></div>
        <div className='talent-picture-box-mascot'><Image src={animation} enableZoom /></div>
      </div>
      <div className='talent-info-container'>
        <FramedTextbox corner={frame} border={firstNameLower}>
          <h2>{name}</h2>
          <p><i>{quote}</i></p>

          {children}

          <div className='talent-links-container'>
            <a className='external-link-text' href={youtube}>{firstName}'s Youtube</a>
            <a className='external-link-text' href={twitter}>{firstName}'s Twitter</a>
            <a className='external-link-text' href={discord}> Fan Discord</a>
          </div>
        </FramedTextbox>
        <RowOfGifs
          className='hide-on-tablet'
          gif1={animation}
          gif2={animation}
          gif3={animation}
          gif4={animation}
        />
      </div>
    </div>
  )
}
