import React from 'react'
import TalentLayout from '../components/TalentLayout'
import FinanaImage from '../assets/Portraits/Finana-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import FinanaFrame from '../assets/Corners/Finana-LiverCorner.webp'
import corner from '../assets/Corners/Finana-MsgCorner.webp'
import Ryuguard from '../assets/Animations/Finana-AnimationA_500px.gif'

function Finana (): JSX.Element {
  const name = 'Finana Ryugu'
  const quote = 'Fish and chips, anyone?'
  const info = [
    'Nickname(s): Fina, Feesh, Finaurnaur',
    'Finana Ryugu (フィナーナ 竜宮) is a mermaid who spends her time with tropical fish in the sea of coral reefs and is affiliated with NIJISANJI EN’s first wave “LazuLight”. She has a heart as clear and pure as the calm and beautiful sea.',
    'Surfacing from the sea, Finana heard of the advent of VTubers from her tropical fish companions and left her home to investigate. She has since learned a great deal above the ocean, such as what a solar is, and has also shared her own experience in keyboards as well as forbidden knowledge of egg-shaped objects and the way of the future.',
    'And beyond learning and teaching, Finana has found and diligently trained new ways to interact with her loyal Ryugards and Ryugals and the world at large. Though initially reserved about her voice, she stormed onto the scene with the debut of her first original song, Tsunami, proving that her singing is a natural disaster to our playlists and a blessing to our ears. She even donned a new outfit for the occasion, proudly showing us all that this Feesh has got drip.'
  ]
  const youtubeLink = 'https://www.youtube.com/c/FinanaRyugu-NIJISANJIEN'
  const twitterLink = 'https://twitter.com/FinanaRyugu'
  const fanDiscordLink = 'https://discord.gg/425bxuSsff'

  return (
    <TalentLayout
      name={name}
      artBoardHeading='Community Ryuguard Collage'
      frame={FinanaFrame}
      animation={Ryuguard}
      corner={corner}
      portrait={FinanaImage}
      quote={quote}
      info={info}
      youtube={youtubeLink}
      twitter={twitterLink}
      discord={fanDiscordLink}
    />
  )
}

export default Finana
