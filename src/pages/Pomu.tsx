import React from 'react'
import TalentLayout from '../components/TalentLayout'
import PomuImage from '../assets/Portraits/Pomu-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import PomuFrame from '../assets/Corners/Pomu-LiverCorner.webp'
import corner from '../assets/Corners/Pomu-MsgCorner.webp'
import Pomudachi from '../assets/Animations/Pomu-Animation.webm'

function Pomu (): JSX.Element {
  const info = [
    'Placeholder info for Pomu!'
  ]
  const youtubeLink = 'https://www.youtube.com/channel/UCP4nMSTdwU1KqYWu3UH5DHQ'
  const twitterLink = 'https://twitter.com/PomuRainpuff'
  const fanDiscordLink = ''

  return (
    <div>
      <TalentLayout
        name='Pomu Rainpuff'
        corner={corner}
        frame={PomuFrame}
        animation={Pomudachi}
        portrait={PomuImage}
        info={info}
        youtube={youtubeLink}
        twitter={twitterLink}
        discord={fanDiscordLink}
      />
    </div>
  )
}

export default Pomu
