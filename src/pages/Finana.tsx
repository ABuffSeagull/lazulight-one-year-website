import React from 'react'
import TalentLayout from '../components/TalentLayout'
import FinanaImage from '../assets/Portraits/Finana-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import FinanaFrame from '../assets/Corners/Finana-LiverCorner.webp'
import corner from '../assets/Corners/Finana-MsgCorner.webp'
import Ryuguard from '../assets/Animations/Finana-AnimationA_500px.webm'

function Finana (): JSX.Element {
  const name = 'Finana Ryugu'
  const info = [
    'Placeholder info for Finana!'
  ]
  const youtubeLink = 'https://www.youtube.com/c/FinanaRyugu-NIJISANJIEN'
  const twitterLink = 'https://twitter.com/FinanaRyugu'
  const fanDiscordLink = ''

  return (
    <div>
      <TalentLayout
        name={name}
        frame={FinanaFrame}
        animation={Ryuguard}
        corner={corner}
        portrait={FinanaImage}
        info={info}
        youtube={youtubeLink}
        twitter={twitterLink}
        discord={fanDiscordLink}
      />
    </div>
  )
}

export default Finana
